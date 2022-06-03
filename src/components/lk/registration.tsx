import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {FormHeader} from "components/shared/fonts/specialFonts";
import {
    InputAddress,
    InputCompany,
    InputPhoneNumber, InputState,
    InputUR_INN,
    InputUR_KPP, OutputDetail
} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {FormContainer, FormList} from "components/shared/forms/form";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {useDispatch} from "react-redux";
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {URLs} from "src/utils/constants";

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

const ButtonSendSuccess = styled(ButtonStyle)`
  box-shadow: 0px 0px 0px 4px rgba(0, 255, 0, 0.2);
`;

const ButtonSendError = styled(ButtonStyle)`
  box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
`;

const Registration = () => {
    const form:any = {};

    let setTitle, setInn, setKpp, setUrAddress, setRealAddress, setPhone, setDetail = null;
    [form.title, setTitle] = useState<any>(null);
    [form.inn, setInn] = useState<any>(null);
    [form.official_address, setUrAddress] = useState<any>(null);
    [form.phone_number, setPhone] = useState<any>(null);
    [form.kpp, setKpp] = useState<any>(null);
    [form.real_address, setRealAddress] = useState<any>(null);
    [form.detail, setDetail] = useState<any>(null);
    const [button, setButton] = useState<any>(null);

    const dispatch = useDispatch();

    const reg = () => {
        if (Object.values(form).map(value => !value || (value as InputState).obj.checkError()).some(error => error)) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        AppendApiMethod({
            func: 'post', url: '/employee/api/v2/company/create/',
            data: Object.keys(form).reduce((target, key) => ({...target, [key]: form[key].value}), {}),
            success: (success) => {
                Object.values(form).map(value => (value as InputState).obj.clear());
                button.Animate({Styled: ButtonSendSuccess, Children: 'Регистрация выполнена', timeOut: 2000});
                window.open(URLs.COMPANY_LK, '_self');
            },
            error: (error) => {
                Object.keys(error.response.data).map(key => {
                    if (form[key]) {
                        form[key].obj.setError(error.response.data[key]);
                    }
                });
                button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            }, auth: true
        })(dispatch);
    }

    return (
        <FormContainer css={RegistrationStyle}>
            <FormHeader>Регистрация компании</FormHeader>
            <FormList>
                <InputCompany placeholder={'Наименование организации'} setObj={setTitle}></InputCompany>
                <InputUR_INN placeholder={'ИНН'} setObj={setInn}></InputUR_INN>
                <InputAddress placeholder={'Юр. адрес'} setObj={setUrAddress}></InputAddress>
                <InputUR_KPP placeholder={'КПП'} setObj={setKpp}></InputUR_KPP>
                <InputPhoneNumber placeholder={'Телефон'} setObj={setPhone}></InputPhoneNumber>
                <InputAddress placeholder={'Фактический адрес'} setObj={setRealAddress}></InputAddress>
                <OutputDetail setObj={setDetail}></OutputDetail>
                <ButtonBlue styled={ButtonStyle} func={reg} setObj={setButton}>Зарегистрировать</ButtonBlue>
            </FormList>
        </FormContainer>
    );
};

export default Registration;