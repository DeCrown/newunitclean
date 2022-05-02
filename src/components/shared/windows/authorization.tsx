import React from 'react';
import styled, {css} from "styled-components";
import {FormContainer, FormList} from "components/shared/forms/form";
import {FormHeader} from "components/shared/fonts/specialFonts";
import {
    InputLoginOrEMail,
    InputPassword,
} from "components/shared/forms/InputText";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import AuthWith from "components/shared/forms/specialForms/authWith";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  margin-top: 25px;
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`;

export const Authorization = () => {
    return (
        <FormContainer background={true}>
            <FormHeader>Вход</FormHeader>
            <FormList>
                <InputLoginOrEMail placeholder={'Логин или E-mail'}></InputLoginOrEMail>
                <InputPassword placeholder={'Пароль'}></InputPassword>
                <ButtonBlue styled={ButtonStyle}>Войти</ButtonBlue>
            </FormList>
            <AuthWith></AuthWith>
        </FormContainer>
    );
};