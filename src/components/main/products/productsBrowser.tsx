import React, {useState} from 'react';
import styled from "styled-components";
import {H2Main} from "components/shared/fonts/specialFonts";
import {Api} from "src/api";
import Category from "components/main/products/category";
import Product from "components/main/products/product";

const ProductsStyle = styled.div`
  margin: 100px 0 150px 0;
`;

const Categories = styled.div`
  background: #FCF4F0;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 10px;
  height: min-content;
  padding: 16px;
`;

const Header = styled(H2Main)`
  text-align: left;
  margin-left: 20px;
  
  .mobile & {
    margin: 0;
    text-align: center;
  }
`;

const Container = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 270px auto;
`;

const ProductsList = styled.div`
  display: flex;
  grid-gap: 32px;
  flex-wrap: wrap;
`;

const ProductsBrowser = () => {

    const [selected, setSelected] = useState(0);
    const categories = Api.Catalog.get();

    function select(i: number) {
        setSelected(i);
    }

    return (
        <ProductsStyle>
            <Header>Товары</Header>
            <Container>
                <Categories>
                    {categories.map((category, i) => <Category key={i} selected={selected} self={i} func={select}>{category.category}</Category>)}
                </Categories>
                <ProductsList>
                    {categories[selected].products.map((product, i) => <Product key={i} data={product}></Product>)}
                </ProductsList>

            </Container>
        </ProductsStyle>
    );
};

export default ProductsBrowser;