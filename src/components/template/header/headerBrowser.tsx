import React, {useCallback, useEffect, useState} from "react";

import styled, {css} from "styled-components";
import * as constants from "src/utils/constants";
import logo from "src/logo/croppedlogo.png";
import HeaderTopButton from "components/template/header/topButton";
import HeaderBottomMenuButton from "components/template/header/bottomButton";
import {headerMenuBottomButton, headerMenuTopButton, ProductType} from "src/utils/types";
import {showFeedback} from "components/template/header/headerFuncs";
import {useTypedSelector} from "src/store/configureStore";
import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";
import {WINDOW_SEARCH} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {InputText} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {GetSearch} from "src/actions/SearchAction/SearchAction";
import {IStateSearch} from "src/reducers/SearchReducer/SearchReducer.types";
import {useDispatch} from "react-redux";
import {URLs} from "src/utils/constants";
import {WindowsManagerClear, WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";

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

const HeaderSearchStyle = styled(HeaderBottomStyle)`
  grid-template-columns: 26% auto 18%;
  align-items: center;
`;

const ButtonSearchStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  width: min-content;
  height: 42px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  
  font-size: ${({ theme }) => theme.font.size[15]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
`;

const ButtonCloseStyle = styled(DIV_BUTTON_WHITE_STYLE)`
  min-width: min-content;
  height: 42px;
  aspect-ratio: 1;
  padding: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.font.size[32]};
`;

const SearchContainer = styled.div`
  padding: 0 30px 0 55px;
  position: relative;
`;

const SearchInputTextStyle = css`
  height: 42px;
`;

const SearchResults = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: grid;
  padding: 12px;
  position: absolute;
  top: calc(100% + 20px);
  width: calc(100% - 109px);
`;

const SearchNoResults = styled.div`
  padding: 12px;
  cursor: pointer;
  border-radius: 10px;
  font-style: italic;
`;

const SearchResultStyle = styled(SearchNoResults)`
  font-style: normal;
  transition: background-color 0.2s;
  &:hover {
    background: #e6e6e6;
  }
`;

const SearchButtons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  justify-content: start;
`;

const SearchResult = (props: {product: ProductType}) => {
    const click = () => {
        window.open(URLs.PRODUCT.replace(':id', '' + props.product.id));
    }

    return (<SearchResultStyle onClick={click}>
        {props.product.title}
    </SearchResultStyle>)
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
            <InputText css={SearchInputTextStyle} placeholder={'Поиск по сайту'} setObj={setSearchInput}></InputText>
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
                ? <HeaderBottomSearch></HeaderBottomSearch>
                : <HeaderBottom bottomButtons={props.bottomButtons}></HeaderBottom>
            }

        </HeaderContainerStyle>
    );
}