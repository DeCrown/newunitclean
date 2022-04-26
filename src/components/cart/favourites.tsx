import React from 'react';
import ProductsList from "components/shared/productsList";
import Line from "components/shared/line";
import ButtonBlue from "components/shared/forms/ButtonBlue";
import EmptyBasket from "components/shared/productsList/empty";
import {Api} from "src/api";
import {BrowserView} from "react-device-detect";
import TabContent from "components/shared/tabsMenu/tabContent";
import {ButtonContainerCenter} from "components/cart/shared/buttonContainers";
import Button from "components/cart/shared/button";

const Favourites = () => {

    const products = Api.Cart.favourites.get();

    return (
        products.length
            ?
            <TabContent>
                <ProductsList products={products} buttons={true}></ProductsList>
                <BrowserView>
                    <Line></Line>
                </BrowserView>
                <ButtonContainerCenter>
                    <ButtonBlue css={Button}>Купить за {45} ₽</ButtonBlue>
                </ButtonContainerCenter>
            </TabContent>
            :
            <TabContent>
                <EmptyBasket>Вы не выбрали избранные товары</EmptyBasket>
                <ButtonContainerCenter>
                    <ButtonBlue css={Button}>Посмотреть товары</ButtonBlue>
                </ButtonContainerCenter>
            </TabContent>
    );
};

export default Favourites;