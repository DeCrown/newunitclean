import React from 'react';
import Product from "./product";
import styled from "styled-components";
import {ProductType} from "src/utils/types";

const ProductsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 30px;
  
  .mobile & {
    display: grid;
    grid-gap: 20px;
  }
`

const ProductsList = (props: {products: ProductType[]}) => {
    return (
        <ProductsStyle>
            { props.products.map((product) => <Product key={product.id} data={product}></Product>) }
        </ProductsStyle>
    );
};

export default ProductsList;