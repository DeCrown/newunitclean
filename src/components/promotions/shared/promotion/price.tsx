import React from 'react';
import styled from "styled-components";
import {showMoneySum} from "src/utils/functions";

const PriceStyle = styled.div`
  background: #FFFFFF;
  border-radius: 25px 0px 0px 25px;

  font-weight: ${({ theme }) => theme.font.weight[800]};
  font-size: ${({ theme }) => theme.font.size[40]};
  color: ${({ theme }) => theme.font.color.red};
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.35);

  position: relative;
  height: 50px;
  padding: 0 24px;
  margin-bottom: 10px;
`;

const Price = (props: {sum?: number}) => {
    return (
        <PriceStyle>
            {props.sum ? 'от ' + showMoneySum(props.sum) + 'р' : ''}
        </PriceStyle>
    );
};

export default Price;