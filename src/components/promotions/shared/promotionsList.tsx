import React from 'react';
import styled from "styled-components";
import {ProductType} from "src/utils/types";
import Promotion from "components/promotions/shared/promotion";

const PromotionsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 30px; gap: 30px;
  margin-top: 32px;
  
  .mobile & {
    display: grid;
    grid-auto-flow: row;
  }
`

const PromotionsList = (props: {promotions: ProductType[]}) => {

    return (
        <PromotionsStyle>
            { props.promotions.map((promotion) => <Promotion key={promotion.id} data={promotion}></Promotion>) }
        </PromotionsStyle>
    );
};

export default PromotionsList;