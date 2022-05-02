import React from 'react';
import {Forms} from "components/shared/forms";
import styled from "styled-components";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";

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

const ButtonSend = styled.span`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[800]};
`

const OrderCall = () => {
    return (
        <OrderCallStyle>
            <OrderCallHeader>Заказать звонок</OrderCallHeader>
            <OrderCallText>Если у Вас остались вопросы, оставьте контактные данные, и наш менеждер свяжется с Вами в удобное время</OrderCallText>
            <Forms.InputText placeholder='Имя' ></Forms.InputText>
            <Forms.InputText placeholder='Телефон' ></Forms.InputText>
            <Forms.InputText placeholder='Когда перезвонить' ></Forms.InputText>
            <Forms.InputTextField placeholder='Комментарий' ></Forms.InputTextField>
            <ButtonBlue><ButtonSend>Отправить</ButtonSend></ButtonBlue>
        </OrderCallStyle>
    );
};

export default OrderCall;