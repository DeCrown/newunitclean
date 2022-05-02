import React from 'react';
import ProductsList from "components/shared/productsList";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import EmptyBasket from "components/shared/productsList/empty";
import {Api} from "src/api";
import TabContent from "components/shared/tabsMenu/tabContent";
import {ButtonContainerCenter, ButtonContainerLeft} from "components/cart/shared/buttonContainers";
import Button from "components/cart/shared/button";

const PreviousOrders = () => {

    const orders = Api.Cart.previousOrders.get();

    return (
        orders.length
            ?
            <TabContent>
                { orders.map((order, i) => <TabContent key={i}>
                    <ProductsList products={order.products} buttons={true}></ProductsList>
                    <ButtonContainerLeft>
                        <ButtonBlue styled={Button}>Номер заказа</ButtonBlue>
                    </ButtonContainerLeft>
                </TabContent>) }
            </TabContent>
            :
            <TabContent>
                <EmptyBasket>Вы еще не сделали свой первый заказ :(</EmptyBasket>
                <ButtonContainerCenter>
                    <ButtonBlue styled={Button}>Посмотреть товары</ButtonBlue>
                </ButtonContainerCenter>
            </TabContent>
    );
};

export default PreviousOrders;