import React from 'react';
import {FormHeader} from "components/shared/fonts/specialFonts";
import {
    InputEMail, InputFIO, InputLogin, InputPassword,
    InputPhoneNumber,
} from "components/shared/forms/InputText";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import AuthWith from "components/shared/forms/specialForms/authWith";
import {FormContainer, FormList} from "components/shared/forms/form";
import {useDispatch} from "react-redux";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import styled from "styled-components";

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  margin-top: 25px;
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`;

export const Registration = () => {
    return (
        <FormContainer background={true}>
            <FormHeader>Регистрация</FormHeader>
            <FormList>
                <InputLogin placeholder={'Логин'}></InputLogin>
                <InputFIO placeholder={'ФИО'}></InputFIO>
                <InputEMail placeholder={'E-mail'}></InputEMail>
                <InputPhoneNumber placeholder={'Телефон'}></InputPhoneNumber>
                <InputPassword placeholder={'Пароль'}></InputPassword>
                <InputPassword placeholder={'Повторите пароль'}></InputPassword>
                <ButtonBlue styled={ButtonStyle}>Зарегистрировать</ButtonBlue>
            </FormList>
            <AuthWith></AuthWith>
        </FormContainer>
    );
};

export const OpenRegistration = () => {
    const dispatch = useDispatch();

    dispatch({
        type: 'SET_ACTIVE_WINDOW',
        payload: Registration
    });

    return (<div></div>)
}