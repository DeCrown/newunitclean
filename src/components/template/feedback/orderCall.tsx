import React, {useState} from 'react';
import styled from "styled-components";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {InputDate, InputFIO, InputPhoneNumber, InputState, OutputDetail} from "components/shared/forms/inputText";
import InputTextField from "components/shared/forms/inputTextField";
import {useDispatch} from "react-redux";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {ApiMethod} from "src/api/APIMethod";

const OrderCallStyle = styled.div`
  width: 370px;
  display: grid;
  margin: 100px;
  row-gap: 10px;
  align-items: center;
  /* grid-template-rows: 10% 15% 1fr 1fr 1fr 20%; */
  
  .mobile & {
    width: auto;
    margin: 0px;
    padding: 40px 16px;
    row-gap: 16px;
  }
`

const OrderCallHeader = styled.div`
  color: #fff !important;
  align-self: start;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size[36]};
  font-weight: ${({ theme }) => theme.font.weight[900]};

  .mobile & {
    text-align: center;
    font-size: ${({ theme }) => theme.font.size[20]};
    margin-bottom: 20px;
  }
`

const OrderCallText = styled.div`
  font-weight: 700;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};

  .mobile & {
    text-align: center;
    font-size: ${({ theme }) => theme.font.size[14]};
    margin-bottom: 20px;
  }
`

const ButtonSend = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[800]};
`

const ButtonSendSuccess = styled(ButtonSend)`
  box-shadow: 0px 0px 0px 4px rgba(0, 255, 0, 0.2);
`;

const ButtonSendError = styled(ButtonSend)`
  box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
`;

const OrderCall = () => {
    const form:any = {};
    let setName, setPhone, setDate, setComment, setDetail = null;
    [form.full_name, setName] = useState<any>(null);
    [form.phone_number, setPhone] = useState<any>(null);
    [form.date_to_answer, setDate] = useState<any>(null);
    [form.comment, setComment] = useState<any>(null);
    [form.detail, setDetail] = useState<any>(null);
    const [button, setButton] = useState<any>(null);

    const dispatch = useDispatch();

    const orderCall = () => {
        if (Object.values(form).map(value => !value || (value as InputState).obj.checkError()).some(error => error)) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});

        ApiMethod({
            func: 'post', url: '/employee/api/v2/call_order/',
            data: Object.keys(form).reduce((target, key) => ({...target, [key]: form[key].value}), {})
        })
            .then(success => {
                Object.values(form).map(value => (value as InputState).obj.clear())
                button.Animate({Styled: ButtonSendSuccess, Children: 'Заявка отправлена', timeOut: 2000});
            })
            .catch(error => {
                Object.keys(error.response.data).map(key => {
                    if (error.response.data[key]) {
                        form[key].obj.setError(error.response.data[key]);
                    }
                });
                button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            });
    }

    return (
        <OrderCallStyle>
            <OrderCallHeader>Заказать звонок</OrderCallHeader>
            <OrderCallText>Если у Вас остались вопросы, оставьте контактные данные, и наш менеждер свяжется с Вами в удобное время</OrderCallText>
            <InputFIO placeholder='Имя' setObj={setName}></InputFIO>
            <InputPhoneNumber placeholder='Телефон' setObj={setPhone}></InputPhoneNumber>
            <InputDate placeholder='Когда перезвонить' setObj={setDate}></InputDate>
            <InputTextField placeholder='Комментарий' setObj={setComment}></InputTextField>
            <OutputDetail setObj={setDetail}></OutputDetail>
            <ButtonBlue styled={ButtonSend} func={orderCall} setObj={setButton}>Отправить</ButtonBlue>
        </OrderCallStyle>
    );
};

export default OrderCall;