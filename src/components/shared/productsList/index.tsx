import React, {useState} from 'react';
import {Product, ProductWithButtons} from "./product";
import styled from "styled-components";
import {ProductType} from "src/utils/types";

const ProductsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 30px;
  
  .mobile & {
    display: grid;
    grid-auto-flow: column;
    overflow-x: scroll;
    
    margin: -50px;
    padding: 50px;
    
    &.withButtons {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 20px;
    }
  }
`

const ProductsList = (props: {products: ProductType[], buttons?: boolean}) => {

    return (
        props.buttons ?
            <ProductsStyle className={'withButtons'}>
                { props.products.map((product) => <ProductWithButtons key={product.id} data={product}></ProductWithButtons>) }
            </ProductsStyle>
        :
            <ProductsStyle>
                { props.products.map((product) => <Product key={product.id} data={product}></Product>) }
            </ProductsStyle>
    );
};

export default ProductsList;