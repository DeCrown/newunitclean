import React from 'react';
import {ProductType} from "src/utils/types";
import styled from "styled-components";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {BASE_URL, URLs} from "src/utils/constants";
import {showMoneySum} from "src/utils/functions";

const Price = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  display: none;
  
  & span {
    font-weight: ${({ theme }) => theme.font.weight[700]};
  }
`;

const ProductStyle = styled.a`
  display: block;
  text-decoration: none;
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
  color: ${({ theme }) => theme.font.color.white};
  padding: 20px;
  grid-gap: 8px; gap: 8px;
  justify-items: start;

  position: absolute;
  z-index: 1;
  width: calc(100% - 40px);
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.font.color.white};
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
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
        <ProductStyle href={URLs.PRODUCT.replace(':id', '' + props.data.id)}>
            <Info>
                <Title>{props.data.title}</Title>
                {
                    props.data.price ?
                        <Price>Цены от <span>{showMoneySum(props.data.price) + ' руб.'}</span></Price>
                        :
                        null
                }
                <ButtonBlue styled={ButtonStyle}>ПОСМОТРЕТЬ КАТАЛОГ</ButtonBlue>
            </Info>
            <Image src={props.data.image && props.data.image.length ? BASE_URL + props.data.image[0] : ''}></Image>
        </ProductStyle>
    );
};

export default Product;