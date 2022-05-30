import React, {useCallback, useEffect, useState} from "react";

import styled, {css} from "styled-components";
import * as constants from "src/utils/constants";
import logo from "src/logo/croppedlogo.png";
import HeaderTopButton from "components/template/header/topButton";
import HeaderBottomMenuButton from "components/template/header/bottomButton";
import {headerMenuBottomButton, headerMenuTopButton} from "src/utils/types";
import {showFeedback} from "components/template/header/headerFuncs";
import {useTypedSelector} from "src/store/configureStore";
import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";
import {WINDOW_SEARCH} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {InputText} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {GetSearch} from "src/actions/SearchAction/SearchAction";
import {IStateSearch} from "src/reducers/SearchReducer/SearchReducer.types";
import {useDispatch} from "react-redux";
import {URLs} from "src/utils/constants";
import {
    ButtonSearchStyle,
    HeaderSearchStyle, SearchButtons,
    SearchContainer, SearchInputTextContainerStyle,
    SearchInputTextStyle, SearchNoResults, SearchResult, SearchResults
} from "components/shared/windows/search";

const HeaderContainerStyle = styled.div`
  background: #ADB8C4;
  height: 92px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  
  &.search {
    z-index: 2;
    position: relative;
  }
`;

const HeaderTop = styled.div`
  background: #000000BD;
  display: grid;
  grid-template-columns: 45% 5% auto auto auto auto auto auto 10%;
  grid-template-rows: 28px;
`;

const HeaderTopText = styled.div`
  display: grid;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
`;

const HeaderBottomStyle = styled.div`
  display: grid;
  background: #ADB8C4;
  grid-template-rows: 64px;
  color: #000;
  grid-template-columns: 26% 40% auto;
  height: 64px;
`;

const Logo = styled.div`
  height: 100%;
  justify-self: end;
  
  & img {
    height: 100%;
  }
`;

const PhoneNumber = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 24px;
`;

const PhoneNumberText = styled.div`
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[800]};
`;

const PhoneNumberButton = styled.div`
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  
  border: 2px solid #000;
  border-radius: 10px;
  height: 25px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  background: #ADB8C4;
  transition: filter 0.5s;
  
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  }
`;

const HeaderBottomMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderBottom = (props: {bottomButtons: headerMenuBottomButton[]}) => {
    return (<HeaderBottomStyle>
        <Logo>
            <img src={logo} />
        </Logo>
        <PhoneNumber onClick={showFeedback}>
            <PhoneNumberText>{constants.INFO.PHONE_NUMBER}</PhoneNumberText>
            <PhoneNumberButton>Заказать звонок</PhoneNumberButton>
        </PhoneNumber>
        <HeaderBottomMenu>
            {
                props.bottomButtons.map((button, i) => <HeaderBottomMenuButton key={i} data={button}/>)
            }
        </HeaderBottomMenu>
    </HeaderBottomStyle>)
}

const HeaderBottomSearch = () => {
    const Search = useTypedSelector((store) => store.Search);
    const {results} = Search as IStateSearch;
    const [searchInput, setSearchInput] = useState<any>(null);
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        if (searchInput) {
            stableDispatch(GetSearch(searchInput.value));
        }
    }, [searchInput])

    const search = () => {
        window.open(URLs.SEARCH_WITH_PARAM.replace(':search', searchInput.value), '_self');
    }

    return (<HeaderSearchStyle>
        <Logo>
            <img src={logo} />
        </Logo>
        <SearchContainer>
            <InputText styled={SearchInputTextStyle}
                       styledContainer={SearchInputTextContainerStyle}
                       placeholder={'Поиск по сайту'} setObj={setSearchInput}></InputText>
            <SearchResults>
                {results.length
                    ? results.slice(0, 10).map((result) =>
                        <SearchResult product={result} key={result.id}></SearchResult>)
                    : <SearchNoResults>Товары не найдены</SearchNoResults> }
            </SearchResults>
        </SearchContainer>
        <SearchButtons>
            <ButtonBlue styled={ButtonSearchStyle} func={search}>Найти</ButtonBlue>
        </SearchButtons>
    </HeaderSearchStyle>)
}

export const HeaderContainer = (props: {topButtons: headerMenuTopButton[]; bottomButtons: headerMenuBottomButton[]}) => {
    const WindowsManager = useTypedSelector((store) => store.WindowsManager);
    const {window} = WindowsManager as IStateWindows;

    return (
        <HeaderContainerStyle className={window == WINDOW_SEARCH ? 'search' : ''}>
            <HeaderTop>
                <HeaderTopText>{constants.INFO.TITLE}</HeaderTopText>
                <div></div>
                {
                    props.topButtons.map((button, i) => <HeaderTopButton data={button} key={i} />)
                }
            </HeaderTop>

            {window == WINDOW_SEARCH
                ? <HeaderBottomSearch/>
                : <HeaderBottom bottomButtons={props.bottomButtons}></HeaderBottom>
            }

        </HeaderContainerStyle>
    );
}