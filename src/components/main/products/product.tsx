import React from 'react';
import {ProductType} from "src/utils/types";
import styled from "styled-components";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const Price = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  display: none;
  
  & span {
    font-weight: ${({ theme }) => theme.font.weight[700]};
  }
`;

const ProductStyle = styled.div`
  width: 270px;
  height: 205px;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 8.33%, rgba(0, 0, 0, 0.64) 100%);
    
    & ${Price} {
      display: block;
    }

    & ${DIV_BUTTON_BLUE_STYLE} {
      display: grid;
    }
  }
`;

const Info = styled.div`
  display: grid;
  align-content: end;
  height: calc(100% - 40px);
  padding: 20px;
  grid-gap: 8px;
  justify-items: start;

  position: absolute;
  z-index: 1;
  width: calc(100% - 40px);
`;

const Title = styled.div`
  //position: absolute;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  bottom: 16px;
  left: 20px;
`;

const Image = styled.div<{src: string}>`
  background-image: url(${props => props.src});
  mix-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  height: 32px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  width: 100%;
  padding: 0;
  display: none;
`;

const Product = (props: {data: ProductType}) => {
    return (
        <ProductStyle>
            <Info>
                <Title>{props.data.title}</Title>
                <Price>Цены от <span>{props.data.price.toLocaleString()} руб.</span></Price>
                <ButtonBlue styled={ButtonStyle}>ПОСМОТРЕТЬ КАТАЛОГ</ButtonBlue>
            </Info>
            <Image src={props.data.image[0]}></Image>
        </ProductStyle>
    );
};

export default Product;