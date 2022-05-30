import React from 'react';
import styled from "styled-components";

const DiscountStyle = styled.div`
  position: relative;
  margin-top: 20px;
  width: calc(220px - 36px);
  height: 42px;
  padding: 0 8px 0 8px;
  display: grid;
`;

const DiscountBackground = styled.div`
  height: 0px;
  width: 100%;
  border-bottom: 42px solid ${({ theme }) => theme.backgrounds.promotion.discount};
  border-left: 20px solid transparent;
  border-right: 0px solid transparent;
  position: absolute;
  right: 0;
  filter: drop-shadow(0px 4px 12px rgba(0,0,0,0.25));
`;

const DiscountText = styled.div`
  font-weight: ${({ theme }) => theme.font.weight[700]};
  font-size: ${({ theme }) => theme.font.size[24]};
  display: grid;
  align-items: center;
  
  white-space: nowrap;
  grid-auto-flow: column;
  justify-content: end;
  width: 100%;
  position: relative;
  height: 100%;
  grid-gap: 10px;

  & span {
    font-size: ${({ theme }) => theme.font.size[30]};
  }
`;

const Discount = (props: {discount: string}) => {
    return (
        <DiscountStyle>
            <DiscountBackground></DiscountBackground>
            <DiscountText>скидка<span>-{props.discount}</span></DiscountText>
        </DiscountStyle>
    );
};

export default Discount;