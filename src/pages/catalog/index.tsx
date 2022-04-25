import React from 'react';

import TabsMenu from "components/shared/tabsMenu";
import All from "components/cart/all";
import Favourites from "components/cart/favourites";
import PreviousOrders from "components/cart/previousOrders";
import {Api} from "src/api";
import {H1} from "components/shared/fonts/headers";

const Cart = () => {

    const categories = Api.Cart.favourites.get();

    return (
        <div className={'content no_up'}>
            <H1>Корзина</H1>

            <TabsMenu tabs={[
                {
                    title: 'Все товары',
                    content: <All></All>
                },
                {
                    title: 'Избранное',
                    content: <Favourites></Favourites>
                },
                {
                    title: 'Предыдущие заказы',
                    content: <PreviousOrders></PreviousOrders>
                }
            ]}></TabsMenu>
        </div>
    );
};

export default Cart;