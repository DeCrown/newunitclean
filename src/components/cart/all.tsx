import React, {useCallback, useEffect} from 'react';
import ProductsList from "components/shared/productsList";
import Line from "components/shared/duplicateComponents/line";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {BrowserView, isMobile} from "react-device-detect";
import TabContent from "components/shared/tabsMenu/tabContent";
import Button from "components/cart/shared/button";
import {ButtonContainerCenter} from "components/cart/shared/buttonContainers";
import {useDispatch} from "react-redux";
import {IStateCart} from "src/reducers/CartReducer/CartReducer.types";
import {GetCart} from "src/actions/CartAction/CartAction";
import {useTypedSelector} from "src/store/configureStore";
import EmptyBasket from "components/shared/productsList/empty";
import {URLs} from "src/utils/constants";

const All = () => {

    const Cart = useTypedSelector((store) => store.Cart);
    const {cart, isFetching, error} = Cart as IStateCart;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetCart());
    }, []);

    return (
        cart.product.length
            ?
            <TabContent>
                <ProductsList products={cart.product} buttons={true}></ProductsList>
                <BrowserView>
                    <Line></Line>
                </BrowserView>
                <ButtonContainerCenter>
                    <ButtonBlue styled={Button}>Купить за {cart.full_price} ₽</ButtonBlue>
                </ButtonContainerCenter>
            </TabContent>
            :
            <TabContent>
                <EmptyBasket>Ваша корзина пуста</EmptyBasket>
                { isMobile ?
                    ''
                    :
                    <ButtonContainerCenter>
                        <ButtonBlue styled={Button} func={() => window.open(URLs.CATALOG, '_self')}>Посмотреть товары</ButtonBlue>
                    </ButtonContainerCenter>
                }
            </TabContent>
    );
};

export default All;