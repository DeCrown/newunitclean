import React, {useCallback, useEffect, useState} from 'react';
import {useTypedSelector} from "src/store/configureStore";
import {IStateSearch} from "src/reducers/SearchReducer/SearchReducer.types";
import {useDispatch} from "react-redux";
import {GetSearch} from "src/actions/SearchAction/SearchAction";
import {URLs} from "src/utils/constants";
import {
    ButtonSearchStyle,
    SearchButtons,
    SearchInputTextContainerStyle,
    SearchInputTextStyle, SearchNoResults, SearchResult, SearchResults
} from "components/shared/windows/search";
import {InputText} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import styled from "styled-components";
import {Main} from "src/themes/main";

const SearchTabStyle = styled.div`
  position: fixed;
  z-index: 3;
  display: grid;
  grid-auto-flow: column;
  width: calc(100% - ${Main.values.contentMobileMargin * 2}px);
  padding: 18px ${Main.values.contentMobileMargin}px;
  left: 0;
  top: 0;
  grid-gap: 4px; gap: 4px;
`;

const SearchContainer = styled.div`
  
`;

const MobileSearch = () => {
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

    return (<SearchTabStyle>
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
    </SearchTabStyle>)
};

export default MobileSearch;