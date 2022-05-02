import React from 'react';
import ProductsList from "components/shared/productsList";
import Line from "components/shared/duplicateComponents/line";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import EmptyBasket from "components/shared/productsList/empty";
import {Api} from "src/api";
import {BrowserView} from "react-device-detect";
import TabContent from "components/shared/tabsMenu/tabContent";
import Button from "components/cart/shared/button";
import {ButtonContainerCenter} from "components/cart/shared/buttonContainers";

const All = () => {

    const products = Api.Cart.all.get();

    return (
        products.length
            ?
            <TabContent>
                <ProductsList products={products}></ProductsList>
                <BrowserView>
                    <Line></Line>
                </BrowserView>
                <ButtonContainerCenter>
                    <ButtonBlue styled={Button}>Купить за {45} ₽</ButtonBlue>
                </ButtonContainerCenter>
            </TabContent>
            :
            <TabContent>
                <EmptyBasket>Ваша корзина пуста</EmptyBasket>
                <ButtonContainerCenter>
                    <ButtonBlue styled={Button}>Посмотреть товары</ButtonBlue>
                </ButtonContainerCenter>
            </TabContent>
    );
};

export default All;