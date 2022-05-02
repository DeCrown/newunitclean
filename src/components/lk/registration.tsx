import React from 'react';
import styled, {css} from "styled-components";
import {FormHeader} from "components/shared/fonts/specialFonts";
import {
    InputAddress,
    InputCompany,
    InputPhoneNumber,
    InputUR_INN,
    InputUR_KPP
} from "components/shared/forms/InputText";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import {FormContainer, FormList} from "components/shared/forms/form";
import AuthWith from "components/shared/forms/specialForms/authWith";
import {MobileView} from "react-device-detect";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const RegistrationStyle = css`
  margin-top: 210px;
  
  .mobile & {
    margin-top: 12px;
  }
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  margin-top: 25px;
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`;

const Registration = () => {
    return (
        <FormContainer css={RegistrationStyle}>
            <FormHeader>Регистрация компании</FormHeader>
            <FormList>
                <InputCompany placeholder={'Наименование организации'}></InputCompany>
                <InputUR_INN placeholder={'ИНН'}></InputUR_INN>
                <InputAddress placeholder={'Юр. адрес'}></InputAddress>
                <InputUR_KPP placeholder={'КПП'}></InputUR_KPP>
                <InputPhoneNumber placeholder={'Телефон'}></InputPhoneNumber>
                <InputAddress placeholder={'Фактический адрес'}></InputAddress>
                <ButtonBlue styled={ButtonStyle}>Зарегистрировать</ButtonBlue>
            </FormList>
            <MobileView>
                <AuthWith></AuthWith>
            </MobileView>
        </FormContainer>
    );
};

export default Registration;