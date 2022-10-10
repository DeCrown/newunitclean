import React from 'react';
import ProductsList from "components/shared/productsList";
import ButtonBlue from "components/shared/forms/buttonBlue";
import Button from "components/cart/shared/button";
import {OrderType} from "src/utils/types";
import styled from "styled-components";
import {showMoneySum} from "src/utils/functions";

const OrderStyle = styled.div`
  margin-bottom: 74px;
`;

const OrderInfo = styled.div`
  display: grid;
  justify-content: start;
  grid-gap: 10px; gap: 10px;
  margin-bottom: 36px;
`;

const OrderNum = styled.div`
  font-size: ${({ theme }) => theme.font.size[28]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  color: ${({ theme }) => theme.font.color.gray};
  text-align: left;
  margin-bottom: 4px;
`;

const OrderInfoRowStyle = styled.div`
  color: ${({ theme }) => theme.font.color.black};
  display: grid;
  grid-gap: 8px; gap: 8px;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
`;

const OrderInfoRowTitle = styled.span`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
`;

const OrderInfoRowValue = styled.span`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
`;

const OrderInfoRow = (props: {title: string; value: string}) => {
    return (
        <OrderInfoRowStyle>
            <OrderInfoRowTitle>{props.title}:</OrderInfoRowTitle>
            <OrderInfoRowValue>{props.value}</OrderInfoRowValue>
        </OrderInfoRowStyle>
    )
}

const ButtonContainerLeft = styled.div`
  margin-top: 65px;
  display: grid;
  justify-content: left;
  
  .mobile & {
    justify-content: normal;
  }
`;

const Order = (props: {order: OrderType}) => {
    return (
        <OrderStyle key={props.order.id}>
            <OrderInfo>
                <OrderNum>№{props.order.id}</OrderNum>
                <OrderInfoRow title={'Адрес доставки'} value={props.order.address ? props.order.address : 'нет данных'} />
                <OrderInfoRow title={'Дата доставки'} value={props.order.date_to_receive ? props.order.date_to_receive : 'нет данных'} />
                <OrderInfoRow title={'Сумма заказа'} value={showMoneySum(props.order.full_price)} />
            </OrderInfo>
            <ProductsList products={props.order.product} buttons={true} current_size={true}></ProductsList>
            {/*
                <ButtonContainerLeft>
                    <ButtonBlue styled={Button}>Скачать счет</ButtonBlue>
                </ButtonContainerLeft>
            */}
        </OrderStyle>
    );
};

export default Order;