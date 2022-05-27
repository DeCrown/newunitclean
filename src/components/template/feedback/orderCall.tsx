import React, {Children, useCallback, useEffect, useState} from 'react';
import styled from "styled-components";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {InputDate, InputFIO, InputPhoneNumber, InputText} from "components/shared/forms/inputText";
import InputTextField from "components/shared/forms/inputTextField";
import {useDispatch} from "react-redux";
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

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
    const [name, setName] = useState<any>(null);
    const [phone, setPhone] = useState<any>(null);
    const [date, setDate] = useState<any>(null);
    const [comment, setComment] = useState<any>(null);
    const [button, setButton] = useState<any>(null);

    const dispatch = useDispatch();

    const orderCall = () => {
        if (name.obj.checkError()
            + phone.obj.checkError()
            + date.obj.checkError()
            + comment.obj.checkError()) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        AppendApiMethod({
            func: 'post', url: '/employee/api/v2/call_order/',
            data: {
                full_name: name.value,
                phone_number: phone.value,
                date_to_answer: date.value,
                comment: comment.value
            },
            success: (success) => {
                name.obj.clear();
                phone.obj.clear();
                date.obj.clear();
                comment.obj.clear();
                button.Animate({Styled: ButtonSendSuccess, Children: 'Заявка отправлена', timeOut: 2000});
            },
            error: (error) => {
                button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            }
        })(dispatch);
    }

    return (
        <OrderCallStyle>
            <OrderCallHeader>Заказать звонок</OrderCallHeader>
            <OrderCallText>Если у Вас остались вопросы, оставьте контактные данные, и наш менеждер свяжется с Вами в удобное время</OrderCallText>
            <InputFIO placeholder='Имя' setObj={setName}></InputFIO>
            <InputPhoneNumber placeholder='Телефон' setObj={setPhone}></InputPhoneNumber>
            <InputDate placeholder='Когда перезвонить' setObj={setDate}></InputDate>
            <InputTextField placeholder='Комментарий' setObj={setComment}></InputTextField>
            <ButtonBlue styled={ButtonSend} func={orderCall} setObj={setButton}>Отправить</ButtonBlue>
        </OrderCallStyle>
    );
};

export default OrderCall;