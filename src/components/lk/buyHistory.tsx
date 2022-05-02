import React from 'react';
import {H2} from "components/shared/fonts/specialFonts";
import ProductsList from "components/shared/productsList";
import {Api} from "src/api";
import styled from "styled-components";

const BuyHistoryStyle = styled.div`
  padding: 80px 0 200px 0;
  
  .mobile & {
    padding-bottom: 100px;
  }
`;

const BuyHistory = () => {
    const products = Api.Lk.getHistory();

    return (
        <BuyHistoryStyle>
            <H2>История покупок</H2>
            <ProductsList products={products}></ProductsList>
        </BuyHistoryStyle>
    );
};

export default BuyHistory;