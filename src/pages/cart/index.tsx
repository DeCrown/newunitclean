import React from 'react';

import TabsMenu from "components/shared/tabsMenu";
import All from "components/cart/all";
import Favourites from "components/cart/favourites";
import {H1} from "components/shared/fonts/specialFonts";
import PreviousOrders from "components/cart/previousOrders";
import Content from "components/template/content";

const Cart = () => {

    return (
        <Content>
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
        </Content>
    );
};

export default Cart;