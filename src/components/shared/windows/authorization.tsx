import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {FormContainer, FormList} from "components/shared/forms/form";
import {FormHeader} from "components/shared/fonts/specialFonts";
import {
    InputLoginOrEMail,
    InputPassword,
} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {LoginUser} from "src/actions/AuthAction/AuthAction";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "src/store/configureStore";
import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";
import {WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_REGISTRATION} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";

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

const ButtonRegStyle = styled(DIV_BUTTON_WHITE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`;

export const Authorization = () => {
    const WindowsManager = useTypedSelector((store) => store.WindowsManager);
    const {url} = WindowsManager as IStateWindows;

    const [login, setLogin] = useState<any>(null);
    const [password, setPass] = useState<any>(null);
    const [button, setButton] = useState<any>(null);

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    const auth = () => {
        if (login.obj.checkError()
            + password.obj.checkError()) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        stableDispatch(LoginUser({
                data:
                    {username: login.value, password: password.value},
                successFunc: () => {
                    login.obj.clear();
                    password.obj.clear();
                    button.Animate({Styled: ButtonSendSuccess, Children: 'Вход выполнен', timeOut: 2000});
                    if (url) {
                        window.open(url, '_self');
                    }
                },
                errorFunc: () => {
                    button.Animate({Styled: ButtonSendError, Children: 'Неверный логин или пароль', timeOut: 2000});
                }
            }));
    }

    const switchToReg = () => {
        stableDispatch(WindowsManagerOpen(WINDOW_REGISTRATION, url))
    }

    return (
        <FormContainer background={true}>
            <FormHeader>Вход</FormHeader>
            <FormList>
                <InputLoginOrEMail placeholder={'Логин или E-mail'} name='login' setObj={setLogin}></InputLoginOrEMail>
                <InputPassword placeholder={'Пароль'} name='password' setObj={setPass}></InputPassword>
                <ButtonBlue styled={ButtonStyle} func={auth} setObj={setButton}>Войти</ButtonBlue>
                <ButtonBlue styled={ButtonRegStyle} func={switchToReg}>Зарегистрировать</ButtonBlue>
            </FormList>
            {/*<AuthWith></AuthWith>*/}
        </FormContainer>
    );
};