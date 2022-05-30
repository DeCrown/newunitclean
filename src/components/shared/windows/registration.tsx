import React, {useCallback, useState} from 'react';
import {FormHeader} from "components/shared/fonts/specialFonts";
import {
    InputAddress,
    InputEMail, InputFIO, InputLogin, InputPassword,
    InputPhoneNumber,
} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {FormContainer, FormList} from "components/shared/forms/form";
import {useDispatch} from "react-redux";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import styled from "styled-components";
import {useTypedSelector} from "src/store/configureStore";
import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";
import {RegUser} from "src/actions/RegAction/RegAction";
import {WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_AUTHORIZATION} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  margin-top: 25px;
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`;

const ButtonSendSuccess = styled(ButtonStyle)`
  box-shadow: 0px 0px 0px 4px rgba(0, 255, 0, 0.2);
`;

const ButtonSendError = styled(ButtonStyle)`
  box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
`;

const ButtonAuthStyle = styled(DIV_BUTTON_WHITE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`;

export const Registration = () => {
    const WindowsManager = useTypedSelector((store) => store.WindowsManager);
    const {url} = WindowsManager as IStateWindows;

    const [login, setLogin] = useState<any>(null);
    const [fio, setFio] = useState<any>(null);
    const [email, setEMail] = useState<any>(null);
    const [phone, setPhone] = useState<any>(null);
    const [address, setAddress] = useState<any>(null);
    const [password1, setPass1] = useState<any>(null);
    const [password2, setPass2] = useState<any>(null);
    const [button, setButton] = useState<any>(null);

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    const reg = () => {
        if (login.obj.checkError()
            + fio.obj.checkError()
            + email.obj.checkError()
            + phone.obj.checkError()
            + address.obj.checkError()
            + password1.obj.checkError()
            + password2.obj.checkError()) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        stableDispatch(RegUser({
            data: {
                username: login.value,
                email: email.value,
                full_name: fio.value,
                phone_number: phone.value,
                address: address.value,
                password: password1.value,
                password2: password2.value
            },
            successFunc: () => {
                login.obj.clear();
                email.obj.clear();
                fio.obj.clear();
                phone.obj.clear();
                address.obj.clear();
                password1.obj.clear();
                password2.obj.clear();
                button.Animate({Styled: ButtonSendSuccess, Children: 'Регистрация выполнена', timeOut: 2000});
                WindowsManagerOpen(WINDOW_AUTHORIZATION);
            },
            errorFunc: () => {
                button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            }
        }));
    }

    const switchToAuth = () => {
        stableDispatch(WindowsManagerOpen(WINDOW_AUTHORIZATION, url))
    }

    return (
        <FormContainer background={true}>
            <FormHeader>Регистрация</FormHeader>
            <FormList>
                <InputLogin placeholder={'Логин'} setObj={setLogin}></InputLogin>
                <InputFIO placeholder={'ФИО'} setObj={setFio}></InputFIO>
                <InputEMail placeholder={'E-mail'} setObj={setEMail}></InputEMail>
                <InputPhoneNumber placeholder={'Телефон'} setObj={setPhone}></InputPhoneNumber>
                <InputAddress placeholder={'Адрес'} setObj={setAddress}></InputAddress>
                <InputPassword placeholder={'Пароль'} setObj={setPass1}></InputPassword>
                <InputPassword placeholder={'Повторите пароль'} setObj={setPass2}></InputPassword>
                <ButtonBlue styled={ButtonStyle} func={reg} setObj={setButton}>Зарегистрировать</ButtonBlue>
                <ButtonBlue styled={ButtonAuthStyle} func={switchToAuth}>Войти</ButtonBlue>
            </FormList>
            {/*<AuthWith></AuthWith>*/}
        </FormContainer>
    );
};