import React, {useCallback, useEffect, useState} from 'react';
import styled from "styled-components";
import {H2Main} from "components/shared/fonts/specialFonts";
import {Api} from "src/api";
import Category from "components/main/products/category";
import Product from "components/main/products/product";
import {useTypedSelector} from "src/store/configureStore";
import {IStateProductList} from "src/reducers/ProductListReducer/ProductListReducer.types";
import {IStateCategories} from "src/reducers/CategoriesReducer/CategoriesReducer.types";
import {useDispatch} from "react-redux";
import {GetProductList} from "src/actions/ProductListAction/ProductListAction";
import {GetCategories} from "src/actions/CategoriesAction/CategoriesAction";

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

    const state = useTypedSelector((store) => store);
    const productListState = state.ProductList as IStateProductList;
    const categoriesState = state.Categories as IStateCategories;

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetProductList());
        stableDispatch(GetCategories());
    }, []);

    const [selected, setSelected] = useState(-1);

    if (categoriesState.categories.length && selected == -1) {
        setSelected(categoriesState.categories[0].id);
    }

    function select(i: number) {
        setSelected(i);
    }

    return (
        <ProductsStyle>
            <Header>Товары</Header>
            <Container>
                <Categories>
                    {categoriesState.categories.map((category) =>
                        <Category key={category.id} selected={selected} self={category.id} func={select}>{category.title}</Category>)}
                </Categories>
                <ProductsList>
                    {productListState.products
                        .filter(product => product.group == selected)
                        .map((product) => <Product key={product.id} data={product}></Product>)}
                </ProductsList>

            </Container>
        </ProductsStyle>
    );
};

export default ProductsBrowser;