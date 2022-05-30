import React from 'react';
import styled from "styled-components";
import {DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {showFeedback} from "components/template/header/headerFuncs";

const MoreInfoStyle = styled.div`
  .mobile & {
    width: 100%;
  }
`;

const ButtonStyle = styled(DIV_BUTTON_WHITE_STYLE)`
  height: 47px;
  font-size: ${({ theme }) => theme.font.size[14]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  margin-top: 40px;
  
  .mobile & {
    margin: -20px 0 -20px 0;
    font-size: ${({theme}) => theme.font.size[12]};
    width: 100%;
  }
`;

const MoreInfo = () => {
    return (
        <MoreInfoStyle>
            <ButtonBlue styled={ButtonStyle} func={showFeedback}>Уточнить информацию о доставке</ButtonBlue>
        </MoreInfoStyle>
    );
};

export default MoreInfo;