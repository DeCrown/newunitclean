import React, {useCallback, useState} from 'react';
import styled, {css} from "styled-components";
import {FormHeader} from "components/shared/fonts/specialFonts";
import {
    InputAddress,
    InputCompany,
    InputPhoneNumber,
    InputUR_INN,
    InputUR_KPP
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
    const [title, setTitle] = useState<any>(null);
    const [inn, setInn] = useState<any>(null);
    const [kpp, setKpp] = useState<any>(null);
    const [ur_address, setUrAddress] = useState<any>(null);
    const [real_address, setRealAddress] = useState<any>(null);
    const [phone, setPhone] = useState<any>(null);
    const [button, setButton] = useState<any>(null);

    const dispatch = useDispatch();

    const reg = () => {
        if (title.obj.checkError()
            + inn.obj.checkError()
            + kpp.obj.checkError()
            + ur_address.obj.checkError()
            + real_address.obj.checkError()
            + phone.obj.checkError()) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        AppendApiMethod({
            func: 'post', url: '/employee/api/v2/company/create/',
            data: {
                title: title.value,
                inn: inn.value,
                official_address: ur_address.value,
                phone_number: phone.value,
                kpp: kpp.value,
                real_address: real_address.value
            },
            success: (success) => {
                title.obj.clear();
                inn.obj.clear();
                ur_address.obj.clear();
                phone.obj.clear();
                kpp.obj.clear();
                real_address.obj.clear();
                button.Animate({Styled: ButtonSendSuccess, Children: 'Регистрация выполнена', timeOut: 2000});
                window.open(URLs.COMPANY_LK, '_self');
            },
            error: (error) => {
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
                <ButtonBlue styled={ButtonStyle} func={reg} setObj={setButton}>Зарегистрировать</ButtonBlue>
            </FormList>
        </FormContainer>
    );
};

export default Registration;