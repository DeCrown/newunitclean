import React from 'react';
import styled from "styled-components";
import {Api} from "src/api";
import {H2} from "components/shared/fonts/specialFonts";
import ProductsList from "components/shared/productsList";

const OtherProductsStyle = styled.div`
  padding: 80px 0 0 0;
  
  .mobile & {
    padding: 0 0 100px 0;
  }
`;

const OtherProducts = () => {
    const products = Api.Lk.getHistory();

    return (
        <OtherProductsStyle>
            <H2>Другие товары</H2>
            <ProductsList products={products}></ProductsList>
        </OtherProductsStyle>
    );
};

export default OtherProducts;