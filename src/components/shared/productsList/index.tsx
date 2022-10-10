import React from 'react';
import {Product, ProductWithButtons} from "./product";
import styled from "styled-components";
import {ProductType} from "src/utils/types";

const ProductsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  grid-gap: 30px; gap: 30px;
  
  .mobile & {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto;
    justify-content: left;
    overflow-x: scroll;
    
    margin: -50px -${({ theme }) => theme.values.contentMobileMargin}px;
    margin-bottom: 0;
    padding: 50px ${({ theme }) => theme.values.contentMobileMargin}px 30px ${({ theme }) => theme.values.contentMobileMargin}px;
    
    &.withButtons {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 20px; gap: 20px;
    }
  }
`

const ProductsList = (props: {products: ProductType[], buttons?: boolean, current_size?: boolean}) => {

    return (
        props.buttons ?
            <ProductsStyle className={'withButtons'}>
                { props.products.map((product, i) => <ProductWithButtons key={i} data={product} current_size={props.current_size}></ProductWithButtons>) }
            </ProductsStyle>
        :
            <ProductsStyle>
                { props.products.map((product, i) => <Product key={i} data={product} current_size={props.current_size}></Product>) }
            </ProductsStyle>
    );
};

export default ProductsList;