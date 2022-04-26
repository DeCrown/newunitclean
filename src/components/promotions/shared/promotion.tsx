import React from 'react';
import {PromotionType} from "src/utils/types";
import styled from "styled-components";
import {icons} from "src/utils/icons";

const PromotionStyle = styled.div`
  width: 370px;
  height: 370px;
  position: relative;
  background-image: url(${icons.promotion.background});
`;

const Discount = styled.div`
  background-image: url(${icons.promotion.discount});
  font-weight: ${({ theme }) => theme.font.weight[700]};
  font-size: ${({ theme }) => theme.font.size[24]};
  height: 42px;
  display: grid;
  align-content: center;
  position: absolute;
  right: 0;
  top: 20px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: right;
  white-space: nowrap;
  grid-auto-flow: column;
  justify-content: end;
  
  & span {
    font-size: ${({ theme }) => theme.font.size[30]};
  }
`;

const Price = styled.div`
  background-image: url(${icons.promotion.price});
`;

const Title = styled.div`
  background-image: url(${icons.promotion.title});
`;

const Button = styled.div`
  background: #000000CC;
  height: 73px;
  width: 100%;
  display: grid;
  align-content: center;
  position: absolute;
  bottom: 0;
`;

const Promotion = (props: {data: PromotionType}) => {
    return (
        <PromotionStyle>
            <Discount>скидка<span>-30%</span></Discount>
            <Price>3299р</Price>
            <Title>Название товара</Title>
            <Button>Подробнее</Button>
        </PromotionStyle>
    );
};

export default Promotion;