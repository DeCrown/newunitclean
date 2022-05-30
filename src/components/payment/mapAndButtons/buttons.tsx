import React from 'react';
import MarketPlace from "components/payment/mapAndButtons/buttons/marketPlace";
import MoreInfo from "components/payment/mapAndButtons/buttons/moreInfo";
import styled from "styled-components";

const ButtonsStyle = styled.div`
  display: flex;
  grid-gap: 30px;
  
  .mobile & {
    flex-wrap: wrap;
  }
`;

const Buttons = () => {
    return (
        <ButtonsStyle>
            <MarketPlace></MarketPlace>
            <MoreInfo></MoreInfo>
        </ButtonsStyle>
    );
};

export default Buttons;