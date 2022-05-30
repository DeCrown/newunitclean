import React, {useState} from 'react';
import {
    InputAddress,
    InputFIO,
    InputPhoneNumber,
} from "components/shared/forms/inputText";
import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {Select} from "components/shared/forms/select";
import {useDispatch} from "react-redux";
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import ButtonBlue from "components/shared/forms/buttonBlue";

const InputListStyle = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: end;
  justify-self: start;
  align-content: end;

  & input {
    min-width: 370px;
    width: auto;
  }

  .mobile & {
    justify-content: normal;
    width: 100%;
    
    & input {
      width: calc(100% - 40px);
      min-width: 0px;
    }
  }
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  height: 47px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  margin-top: 40px;
  
  .mobile & {
    margin: 0;
  }
`;

const ButtonSendSuccess = styled(ButtonStyle)`
  box-shadow: 0px 0px 0px 4px rgba(0, 255, 0, 0.2);
`;

const ButtonSendError = styled(ButtonStyle)`
  box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
`;

const InputList = () => {
    const [fio, setFio] = useState<any>(null);
    const [phone, setPhone] = useState<any>(null);
    const [address, setAddress] = useState<any>(null);
    const [receiving_type, setReceivingType] = useState<any>(null);
    const [payment_type, setPaymentType] = useState<any>(null);
    const [button, setButton] = useState<any>(null);

    const dispatch = useDispatch();

    const order = () => {
        if (fio.obj.checkError()
            + phone.obj.checkError()
            + address.obj.checkError()
            + receiving_type.obj.checkError()
            + payment_type.obj.checkError()) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        AppendApiMethod({
            func: 'patch', url: '/product/api/v2/order/',
            data: {
                full_name: fio.value,
                phone_number: phone.value,
                address: address.value,
                receiving_type: receiving_type.value,
                payment_type: payment_type.value
            },
            success: (success) => {
                fio.obj.clear();
                phone.obj.clear();
                address.obj.clear();
                receiving_type.obj.clear();
                payment_type.obj.clear();
                button.Animate({Styled: ButtonSendSuccess, Children: 'Заказ оформлен', timeOut: 2000});
            },
            error: (error) => {
                button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            }, auth: true
        })(dispatch);
    }

    return (
        <InputListStyle>
            <InputFIO placeholder={'Укажите ваше ФИО'} setObj={setFio}></InputFIO>
            <InputPhoneNumber placeholder={'Укажите ваш номер телефона'} setObj={setPhone}></InputPhoneNumber>
            <Select defaultOption={{value: '', text: 'Выберите способ доставки'}} setObj={setReceivingType} options={[
                {value: 'САМОВЫВОЗ', text: 'Самовывоз'},
                {value: 'ДОСТАВКА', text: 'Доставка'}
            ]}></Select>
            <InputAddress placeholder={'Укажите адрес доставки'} setObj={setAddress}></InputAddress>
            <Select defaultOption={{value: '', text: 'Выберите способ оплаты'}} setObj={setPaymentType} options={[
                {value: 'КАРТОЙ', text: 'Картой'},
                {value: 'НАЛИЧНЫМИ', text: 'Наличными'}
            ]}></Select>
            <ButtonBlue styled={ButtonStyle} func={order} setObj={setButton}>Заказать</ButtonBlue>
        </InputListStyle>
    );
};

export default InputList;