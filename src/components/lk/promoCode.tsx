import React from 'react';
import InputCode from "components/shared/forms/specialForms/inputCode";
import {FormText} from "components/shared/fonts/specialFonts";
import {InputPromoCode} from "components/shared/forms/InputText";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import {icons} from "src/utils/icons";
import styled, {css} from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const PromoCodeStyle = styled.div`
  margin: 90px -${({ theme }) => theme.values.contentMargin}px 0 -${({ theme }) => theme.values.contentMargin}px;
  background: #D3DAE3;
  padding: 52px 0;
  display: grid;
  justify-content: center;
  
  .mobile & {
    margin: 52px -${({ theme }) => theme.values.contentMobileMargin}px 0 -${({ theme }) => theme.values.contentMobileMargin}px;
    background: #2196F354;
    padding: 52px ${({ theme }) => theme.values.contentMobileMargin}px;
    grid-template-columns: 1fr;
  }
`;

const InlineButton = styled.div`
  display: grid;
  grid-template-columns: auto min-content;
  
  .mobile & {
    margin-top: 10px;
  }
`;

const InputTextStyle = css`
  border-radius: 10px 0 0 10px;
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  height: 100%;
  border-radius: 0 10px 10px 0;
`;

const PromoCode = () => {
    return (
        <PromoCodeStyle>
            <InputCode>
                <FormText>Промокод</FormText>
                <InlineButton>
                    <InputPromoCode css={InputTextStyle}></InputPromoCode>
                    <ButtonBlue styled={ButtonStyle}><img src={icons.button_right_arrow} /></ButtonBlue>
                </InlineButton>
            </InputCode>
        </PromoCodeStyle>
    );
};

export default PromoCode;