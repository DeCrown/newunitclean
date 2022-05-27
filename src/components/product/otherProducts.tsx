import React, {useCallback, useEffect} from 'react';
import styled from "styled-components";
import {Api} from "src/api";
import {H2} from "components/shared/fonts/specialFonts";
import ProductsList from "components/shared/productsList";
import {useTypedSelector} from "src/store/configureStore";
import {IStateProductList} from "src/reducers/ProductListReducer/ProductListReducer.types";
import {IStateCategories} from "src/reducers/CategoriesReducer/CategoriesReducer.types";
import {useDispatch} from "react-redux";
import {GetProductList} from "src/actions/ProductListAction/ProductListAction";
import {GetCategories} from "src/actions/CategoriesAction/CategoriesAction";

const OtherProductsStyle = styled.div`
  padding: 80px 0 0 0;
  
  .mobile & {
    padding: 0 0 100px 0;
  }
`;

const OtherProducts = (props: {self: number}) => {
    const state = useTypedSelector((store) => store);
    const productListState = state.ProductList as IStateProductList;

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetProductList());
    }, []);

    return (
        <OtherProductsStyle>
            <H2>Другие товары</H2>
            <ProductsList products={productListState.products.filter(product => product.id != props.self).slice(0, 4)}></ProductsList>
        </OtherProductsStyle>
    );
};

export default OtherProducts;