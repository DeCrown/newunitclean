import React, {useCallback, useEffect} from 'react';
import ProductsList from "components/shared/productsList";
import styled from "styled-components";
import {useTypedSelector} from "src/store/configureStore";
import {IStateProductList} from "src/reducers/ProductListReducer/ProductListReducer.types";
import {useDispatch} from "react-redux";
import {GetProductList} from "src/actions/ProductListAction/ProductListAction";

const ProductsStyle = styled.div`
  padding-bottom: 80px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size[12]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.gray};
  padding: 35px 0 14px 0;
`;

const ProductsMobile = () => {

    const state = useTypedSelector((store) => store);
    const productListState = state.ProductList as IStateProductList;

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetProductList());
    }, []);

    return (
        <ProductsStyle>
            <Title>Все товары</Title>
            <ProductsList products={productListState.products}></ProductsList>
        </ProductsStyle>
    );
};

export default ProductsMobile;