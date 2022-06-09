import React, {useCallback, useEffect} from 'react';
import ButtonBlue from "components/shared/forms/buttonBlue";
import TabContent from "components/shared/tabsMenu/tabContent";
import {ButtonContainerCenter, ButtonContainerLeft} from "components/cart/shared/buttonContainers";
import Button from "components/cart/shared/button";
import {isMobile} from "src/utils/isMobile";
import EmptyBasket from "components/shared/productsList/empty";
import {useTypedSelector} from "src/store/configureStore";
import {IStatePreviousOrders} from "src/reducers/PreviousOrdersReducer/PreviousOrdersReducer.types";
import {URLs} from "src/utils/constants";
import {GetPreviousOrders} from "src/actions/PreviousOrdersAction/PreviousOrdersAction";
import {useDispatch} from "react-redux";
import Order from "components/cart/shared/order";

const PreviousOrders = () => {

    const PreviousOrder = useTypedSelector((store) => store.PreviousOrders);
    const {orders, isFetching, error} = PreviousOrder as IStatePreviousOrders;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetPreviousOrders());
    }, []);

    return (
        orders.length
            ?
            <TabContent>
                { orders.reverse().map((order) =>
                    <Order key={order.id} order={order}/>
                ) }
            </TabContent>
            :
            <TabContent>
                <EmptyBasket>Вы еще не сделали свой первый заказ :(</EmptyBasket>
                {isMobile() ?
                    ''
                    :
                    <ButtonContainerCenter>
                        <ButtonBlue styled={Button} func={() => window.open(URLs.CATALOG, '_self')}>Посмотреть товары</ButtonBlue>
                    </ButtonContainerCenter>
                }
            </TabContent>
    );
};

export default PreviousOrders;