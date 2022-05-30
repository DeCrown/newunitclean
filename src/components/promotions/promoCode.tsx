import React from 'react';
import InputCode from "components/shared/forms/specialForms/inputCode";
import {FormText} from "components/shared/fonts/specialFonts";
import {InputPromoCode} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {icons} from "src/utils/icons";
import styled, {css} from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {INPUT_TEXT_STYLE} from "components/shared/forms/primitives/INPUT_TEXT";

const PromoCodeStyle = styled.div`
  margin: 52px -${({ theme }) => theme.values.contentMargin}px 0 -${({ theme }) => theme.values.contentMargin}px;
  display: grid;
  justify-content: center;
  
  .mobile & {
    margin: 0px -${({ theme }) => theme.values.contentMobileMargin}px 0 -${({ theme }) => theme.values.contentMobileMargin}px;
    padding: 0px ${({ theme }) => theme.values.contentMobileMargin}px;
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

const InputTextStyle = styled(INPUT_TEXT_STYLE)`
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
                <FormText>Проверить купон</FormText>
                <InlineButton>
                    <InputPromoCode styled={InputTextStyle}></InputPromoCode>
                    <ButtonBlue styled={ButtonStyle}><img src={icons.button_right_arrow} /></ButtonBlue>
                </InlineButton>
            </InputCode>
        </PromoCodeStyle>
    );
};

export default PromoCode;