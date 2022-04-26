import React, {useState} from 'react';
import styled from "styled-components";
import {PromotionType} from "src/utils/types";
import Promotion from "components/promotions/shared/promotion";

const PromotionsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 30px;
  
  .mobile & {
    display: grid;
    grid-auto-flow: column;
    overflow-x: scroll;
    
    margin: -50px;
    padding: 50px;
    
    &.withButtons {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 20px;
    }
  }
`

const PromotionsList = (props: {promotions: PromotionType[]}) => {

    return (
        <PromotionsStyle>
            { props.promotions.map((promotion) => <Promotion key={promotion.id} data={promotion}></Promotion>) }
        </PromotionsStyle>
    );
};

export default PromotionsList;