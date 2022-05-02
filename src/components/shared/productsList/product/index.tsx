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
  margin-bottom: 0px;
  
  .mobile .withButtons & {
    width: auto;
    height: 176px;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
    margin-bottom: 0;
  }
  
  .withButtons & {
    margin-bottom: 90px;
  }
`

const Image = styled.div<{src: string}>`
  margin: 26px 12px 0 12px;
  position: relative;
  background-color: rgba(196, 196, 196, 0.23);
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  .mobile .withButtons & {
    margin: 14px;
  }
`

const Info = styled.div`
  display: grid;
  grid-template-rows: 24% 44% 32% 62px;
  padding: 0 26px;
  
  .mobile .withButtons & {
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
  align-self: center;

  .mobile .withButtons & {
    font-size: ${({ theme }) => theme.font.size[14]};
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
  
  .mobile .withButtons & {
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
  
  .mobile .withButtons & {
    justify-content: start;
  }
`

const Buttons = styled.div`
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  align-content: end;
  
  .mobile .withButtons & {
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
  
  .mobile .withButtons & {
    background: none;
    box-shadow: none;
  }
`

const ButtonDelete = styled(Button)``

const ButtonFavourite = styled(Button)``

export const Product = (props: {data: ProductType}) => {

    return (
        <ProductStyle>
            <Image src={props.data.image[0]} />
            <Info>
                <Title>{props.data.title}</Title>
                <Description>{props.data.description.map((desc, i) => {
                    if (typeof desc.text == "string") {
                        return <span key={i}>{desc.text}<br/></span>
                    }
                    else {
                        return <span key={i}>{desc.text.join(', ')}<br/></span>
                    }
                })}</Description>
                <Price>{props.data.price} РУБ</Price>
            </Info>
        </ProductStyle>
    );
}

export const ProductWithButtons = (props: {data: ProductType}) => {

    function delete_() {
        Api.Cart.all.deleteProduct(props.data.id);
    }
    function favourite() {
        if (props.data.favourite !== undefined) {
            Api.Cart.favourites.markFavourite(props.data.id, props.data.favourite);
        }
    }

    return (
        <ProductStyle className={'withButtons'}>
            <Image src={props.data.image[0]}/>
            <Info>
                <Title>{props.data.title}</Title>
                <Description>{props.data.description.map((desc) => {
                    if (typeof desc.text == "string") {
                        return desc.text
                    }
                    else {
                        return desc.text.join(',')
                    }
                })}</Description>
                <Price>{props.data.price} РУБ</Price>
                <Buttons>
                    <ButtonDelete onClick={delete_}>
                        <img src={icons.delete}/>
                    </ButtonDelete>
                    <ButtonFavourite onClick={favourite}>
                        <img src={props.data.favourite ? icons.favourite : icons.not_favourite}/>
                    </ButtonFavourite>
                </Buttons>
            </Info>
        </ProductStyle>
    );
}