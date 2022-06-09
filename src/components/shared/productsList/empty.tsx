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
  position: relative;
  background: #D3DBE3;
  width: 100%;
  aspect-ratio: 5.5;
  margin-bottom: 64px;
  
  .mobile & {
    width: 100%;
    height: 50px;
  }}
  
  & img {
    position: absolute;
    bottom: -10px;
    left: 35%;
    width: 30%;
  }

  .mobile & img {
    bottom: 0px;
    left: calc(50% - 80px);
    width: 160px;
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