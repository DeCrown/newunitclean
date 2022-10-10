import React, {useCallback, useEffect, useState} from 'react';
import ProductsList from "components/shared/productsList";
import Line from "components/shared/duplicateComponents/line";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {isMobile} from "src/utils/isMobile";
import TabContent from "components/shared/tabsMenu/tabContent";
import Button from "components/cart/shared/button";
import {ButtonContainerCenter} from "components/cart/shared/buttonContainers";
import {useDispatch} from "react-redux";
import {IStateCart} from "src/reducers/CartReducer/CartReducer.types";
import {GetCart} from "src/actions/CartAction/CartAction";
import {useTypedSelector} from "src/store/configureStore";
import EmptyBasket from "components/shared/productsList/empty";
import {URLs} from "src/utils/constants";
import {showMoneySum} from "src/utils/functions";

const All = () => {
    let [price, setPrice] = useState<any>(null);
    const Cart = useTypedSelector((store) => store.Cart);
    const {cart, isFetching, error} = Cart as IStateCart;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetCart());
    }, []);

    if (price) {
        price.state.currentChildren = "Купить за " + showMoneySum(cart.full_price) + " ₽";
    }

    const toPayment = () => {
        window.open(URLs.PAYMENT, '_self')
    }

    return (
        cart.product.length
            ?
            <TabContent>
                <ProductsList products={cart.product} buttons={true} current_size={true}></ProductsList>
                { isMobile() ? null : <Line></Line> }
                <ButtonContainerCenter>
                    <ButtonBlue styled={Button} func={toPayment} setObj={setPrice}>Купить за {showMoneySum(cart.full_price)} ₽</ButtonBlue>
                </ButtonContainerCenter>
            </TabContent>
            :
            <TabContent>
                <EmptyBasket>Ваша корзина пуста</EmptyBasket>
                { isMobile() ?
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