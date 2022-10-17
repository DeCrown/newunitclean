import React from 'react';
import styled from "styled-components";
import {DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {LINKS} from "src/utils/constants";

const MarketPlaceStyle = styled.div`
  .mobile & {
    width: 100%;
  }
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
    width: 100%;
  }
`;

const MarketPlace = () => {
    return (
        <MarketPlaceStyle>
            <ButtonBlue styled={ButtonStyle} func={() => { window.open(LINKS.wildberries) }}>Купить на маркетплейсе</ButtonBlue>
        </MarketPlaceStyle>
    );
};

export default MarketPlace;