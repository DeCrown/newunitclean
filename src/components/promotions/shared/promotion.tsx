import React from 'react';
import {PromotionType} from "src/utils/types";
import styled from "styled-components";
import Discount from "components/promotions/shared/promotion/discount";
import Price from "components/promotions/shared/promotion/price";
import Title from "components/promotions/shared/promotion/title";

import img from "src/bdsim/products/e.png"

const PromotionStyle = styled.div`
  width: 370px;
  position: relative;
  background-repeat: no-repeat;
  aspect-ratio: 1;
  overflow: hidden;
  display: grid;
  justify-items: end;
  align-content: end;
  grid-template-rows: 1fr auto auto 20%;
  grid-template-columns: 100%;
  justify-items: end;
  background-color: #fff;
  
  .mobile & {
    width: 100%;
  }
`;

const Button = styled.div`
  font-weight: ${({ theme }) => theme.font.weight[400]};
  font-size: ${({ theme }) => theme.font.size[20]};
  background: #000000CC;
  height: 100%;
  width: 100%;
  display: grid;
  align-content: center;
  position: relative;
  transition: background-color 0.2s;
  cursor: pointer;
  
  &:hover {
    background: #000000;
  }
`;

const Image = styled.div<{src: string}>`
  background-image: url(${props => props.src});

  position: absolute;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  left: -20%;
  top: -20%;
`;

const Promotion = (props: {data: PromotionType}) => {
    return (
        <PromotionStyle>
            <Image src={img} />
            <Discount discount={props.data.percentage_amount}></Discount>
            <Price sum={props.data.price}></Price>
            <Title val={props.data.title}></Title>
            <Button>Подробнее</Button>
        </PromotionStyle>
    );
};

export default Promotion;