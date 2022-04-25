import React from 'react';
import {icons} from "src/utils/icons";
import styled from "styled-components";

const Text = styled.div`
  margin-bottom: 100px;
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.font.color.light_gray};
`

const Background = styled.div`{
  background: #D3DBE3;
  height: 214px;
  margin-bottom: 120px;
  
  & img {
    position: relative;
    top: -60px;
    left: 0px;
  }
`

const EmptyBasket = (props: {children: string}) => {
    return (
        <div>
            <Text>{props.children}</Text>
            <Background>
                <img src={icons.basket} />
            </Background>
        </div>
    );
};

export default EmptyBasket;