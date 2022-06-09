import React, {useCallback, useEffect} from 'react';
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {H2} from "components/shared/fonts/specialFonts";
import Order from "components/cart/shared/order";
import {
    IStateCompanyPreviousOrders
} from "src/reducers/CompanyPreviousOrdersReducer/CompanyPreviousOrdersReducer.types";
import {GetCompanyPreviousOrders} from "src/actions/CompanyPreviousOrdersAction/CompanyPreviousOrdersAction";
import TabContent from "components/shared/tabsMenu/tabContent";
import EmptyBasket from "components/shared/productsList/empty";
import {isMobile} from "src/utils/isMobile";
import {ButtonContainerCenter} from "components/cart/shared/buttonContainers";
import ButtonBlue from "components/shared/forms/buttonBlue";
import Button from "components/cart/shared/button";
import {URLs} from "src/utils/constants";

const CompanyPreviousOrders = () => {

    const CompanyPreviousOrders = useTypedSelector((store) => store.CompanyPreviousOrders);
    const {orders, isFetching, error} = CompanyPreviousOrders as IStateCompanyPreviousOrders;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetCompanyPreviousOrders());
    }, []);

    return (
        <div>
            <H2>История покупок</H2>

            {
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
            }
        </div>
    );
};

export default CompanyPreviousOrders;