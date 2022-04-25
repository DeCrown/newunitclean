import React from 'react';
import ProductsList from "components/shared/productsList";
import Line from "components/shared/line";
import ButtonBlue from "components/shared/forms/ButtonBlue";
import EmptyBasket from "components/shared/productsList/empty";
import {Api} from "src/api";
import {BrowserView} from "react-device-detect";
import TabContent from "components/shared/tabsMenu/tabContent";
import {ButtonContainerCenter, ButtonContainerLeft} from "components/cart/shared/buttonContainers";
import Button from "components/cart/shared/button";

const PreviousOrders = () => {

    const orders = Api.Cart.previousOrders.get();

    return (
        orders.length
            ?
            <TabContent>
                { orders.map(order => <TabContent>
                    <ProductsList products={order.products}></ProductsList>
                    <ButtonContainerLeft>
                        <ButtonBlue css={Button}>Номер заказа</ButtonBlue>
                    </ButtonContainerLeft>
                </TabContent>) }
            </TabContent>
            :
            <TabContent>
                <EmptyBasket>Вы еще не сделали свой первый заказ :(</EmptyBasket>
                <ButtonContainerCenter>
                    <ButtonBlue css={Button}>Посмотреть товары</ButtonBlue>
                </ButtonContainerCenter>
            </TabContent>
    );
};

export default PreviousOrders;