import React from 'react';
import {icons} from "src/utils/icons";
import {Api} from "src/api";
import styled from "styled-components";
import {ProductType} from "src/utils/types";

const ProductStyle = styled.div`
  position: relative;
  height: 350px;
  width: 270px;
  background: white;
  box-shadow: 0px 9px 18px 7px rgba(0, 0, 0, 0.17);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 50% 50%;
  margin-bottom: 90px;
  
  .mobile & {
    width: auto;
    height: 176px;
    grid-template-rows: auto;
    grid-template-columns: 50% 50%;
    margin-bottom: 0;
  }
`

const Image = styled.div`
  padding: 0px 12px;
  padding-top: 26px;
  
  & img {
    max-width: 100%;
    max-height: 100%;
  }
  
  .mobile & {
    padding: 14px;
  }
`

const Info = styled.div`
  display: grid;
  grid-template-rows: 24% 44% 32% 62px;
  padding: 0 26px;
  
  .mobile & {
    grid-template-rows: 30% 38% 32%;
    padding: 0 40px 0 0;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  color: ${({ theme }) => theme.font.color.black};
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
    align-self: center;
  }
`

const Description = styled.div`
  text-align: left;
  line-height: 26px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  .mobile & {
    align-self: center;
    font-size: ${({ theme }) => theme.font.size[12]};
    line-height: normal;
  }
`

const Price = styled.div`
  display: grid;
  align-content: center;
  justify-content: right;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  color: ${({ theme }) => theme.font.color.blue};
  
  .mobile & {
    justify-content: start;
  }
`

const Buttons = styled.div`
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  align-content: end;
  
  .mobile & {
    height: 100%;
    position: absolute;
    grid-auto-flow: row;
    right: 0;
    align-content: space-between;
  }
`

const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 9px 18px 7px rgba(0, 0, 0, 0.17);
  cursor: pointer;
  display: grid;
  align-content: center;
  justify-content: center;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
  
  .mobile & {
    background: none;
    box-shadow: none;
  }
`

const ButtonDelete = styled(Button)``

const ButtonFavourite = styled(Button)``

const Product = (props: {data: ProductType}) => {

    function delete_() {
        Api.Cart.all.deleteProduct(props.data.id);
    }

    function favourite() {
        if (props.data.favourite !== undefined) {
            Api.Cart.favourites.markFavourite(props.data.id, props.data.favourite);
        }
    }

    return (
        <ProductStyle>
            <Image>
                <img src={props.data.image}/>
            </Image>
            <Info>
                <Title>{props.data.title}</Title>
                <Description>{props.data.description}</Description>
                <Price>{props.data.price} РУБ</Price>
                {props.data.buttons ?
                    <Buttons>
                        <ButtonDelete onClick={delete_}>
                            <img src={icons.delete}/>
                        </ButtonDelete>
                        <ButtonFavourite onClick={favourite}>
                            <img src={props.data.favourite ? icons.favourite : icons.not_favourite}/>
                        </ButtonFavourite>
                    </Buttons>
                    : ''
                }
            </Info>
        </ProductStyle>
    );
};

export default Product;