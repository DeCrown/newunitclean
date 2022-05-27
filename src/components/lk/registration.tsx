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
import AuthWith from "components/shared/forms/specialForms/authWith";
import {MobileView} from "react-device-detect";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {useDispatch} from "react-redux";
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";

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
    const [title, setTitle] = useState<any>(null);
    const [inn, setInn] = useState<any>(null);
    const [kpp, setKpp] = useState<any>(null);
    const [ur_address, setUrAddress] = useState<any>(null);
    const [real_address, setRealAddress] = useState<any>(null);
    const [phone, setPhone] = useState<any>(null);

    const dispatch = useDispatch();

    const reg = () => {
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

            },
            error: (error) => {

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
                <ButtonBlue styled={ButtonStyle} func={reg}>Зарегистрировать</ButtonBlue>
            </FormList>
            <MobileView>
                <AuthWith></AuthWith>
            </MobileView>
        </FormContainer>
    );
};

export default Registration;