import React from 'react';
import styled, {css} from "styled-components";
import {DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const MarketPlaceStyle = styled.div`
  grid-area: marketPlace;
`;

const ButtonStyle = styled(DIV_BUTTON_WHITE_STYLE)`
  height: 47px;
  font-size: ${({ theme }) => theme.font.size[14]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  margin-top: 40px;
  background: #2196F361;
  
  .mobile & {
    margin-top: 0px;
    font-size: ${({theme}) => theme.font.size[12]};
  }
`;

const MarketPlace = () => {
    return (
        <MarketPlaceStyle>
            <ButtonStyle>Купить в маркетплейсе</ButtonStyle>
        </MarketPlaceStyle>
    );
};

export default MarketPlace;