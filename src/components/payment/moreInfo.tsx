import React from 'react';
import styled from "styled-components";
import {DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const MoreInfoStyle = styled.div`
  grid-area: moreInfo;
`;

const ButtonStyle = styled(DIV_BUTTON_WHITE_STYLE)`
  height: 47px;
  font-size: ${({ theme }) => theme.font.size[14]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  margin-top: 40px;
  
  .mobile & {
    margin: -20px 0 -20px 0;
    font-size: ${({theme}) => theme.font.size[12]};
  }
`;

const MoreInfo = () => {
    return (
        <MoreInfoStyle>
            <ButtonStyle>Уточнить информацию о доставке</ButtonStyle>
        </MoreInfoStyle>
    );
};

export default MoreInfo;