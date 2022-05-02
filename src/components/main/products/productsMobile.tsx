import React from 'react';
import {Api} from "src/api";
import ProductsList from "components/shared/productsList";
import {ProductType} from "src/utils/types";
import styled from "styled-components";

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
    const categories = Api.Catalog.get();
    const products:ProductType[] = [];
    categories.map((category) => { products.push.apply(products, category.products) });

    return (
        <ProductsStyle>
            <Title>Все товары</Title>
            <ProductsList products={products}></ProductsList>
        </ProductsStyle>
    );
};

export default ProductsMobile;