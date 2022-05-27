import React, {useCallback, useEffect} from 'react';

import TabsMenu from "components/shared/tabsMenu";
import {H1} from "components/shared/fonts/specialFonts";
import Tab from "components/catalog/tab";
import Content from "components/template/content";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {IStateProductList} from "src/reducers/ProductListReducer/ProductListReducer.types";
import {GetProductList} from "src/actions/ProductListAction/ProductListAction";
import {GetCategories} from "src/actions/CategoriesAction/CategoriesAction";
import {IStateCategories} from "src/reducers/CategoriesReducer/CategoriesReducer.types";

const Catalog = () => {

    const state = useTypedSelector((store) => store);
    const productListState = state.ProductList as IStateProductList;
    const categoriesState = state.Categories as IStateCategories;

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetProductList());
        stableDispatch(GetCategories());
    }, []);

    const tabs = [
        {
            title: 'Все товары',
            content: <div>
                {categoriesState.categories.map((category, i) =>
                    <Tab key={i} products={productListState.products.filter(product => {return product.group == category.id})} title={category.title}></Tab>)}
            </div>
        }
    ];
    categoriesState.categories.map(category => {tabs.push(
        {
            title: category.title,
            content: <Tab products={productListState.products.filter(product => {return product.group == category.id})} title={category.title}></Tab>
        }
    )});

    return (
        <Content>
            <H1>Каталог</H1>

            <TabsMenu tabs={tabs}></TabsMenu>
        </Content>
    );
};

export default Catalog;