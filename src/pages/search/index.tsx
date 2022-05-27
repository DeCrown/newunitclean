import React, {useCallback, useEffect} from 'react';

import {H1} from "components/shared/fonts/specialFonts";
import Content from "components/template/content";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {IStateSearch} from "src/reducers/SearchReducer/SearchReducer.types";
import ProductsList from "components/shared/productsList";
import {GetSearch} from "src/actions/SearchAction/SearchAction";
import {useParams} from "react-router-dom";
import styled from "styled-components";

const ResultsContainer = styled.div`
  padding-top: 32px;
`;

const Search = () => {
    const Search = useTypedSelector((store) => store.Search);
    const {cache} = Search as IStateSearch;
    const param = useParams().search;
    const searchValue = param ? param as string : '';

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetSearch(searchValue, true));
    }, []);

    return (
        <Content>
            <H1>Результаты поиска</H1>

            <ResultsContainer>
                <ProductsList products={cache}/>
            </ResultsContainer>
        </Content>
    );
};

export default Search;