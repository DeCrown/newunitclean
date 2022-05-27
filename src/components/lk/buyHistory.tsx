import React, {useCallback, useEffect} from 'react';
import {H2} from "components/shared/fonts/specialFonts";
import ProductsList from "components/shared/productsList";
import {Api} from "src/api";
import styled from "styled-components";
import {useTypedSelector} from "src/store/configureStore";
import {IStatePreviousOrders} from "src/reducers/PreviousOrdersReducer/PreviousOrdersReducer.types";
import {useDispatch} from "react-redux";
import {GetPreviousOrders} from "src/actions/PreviousOrdersAction/PreviousOrdersAction";
import {ProductType} from "src/utils/types";

const BuyHistoryStyle = styled.div`
  padding: 80px 0 200px 0;
  
  .mobile & {
    padding-bottom: 100px;
  }
`;

const BuyHistory = () => {
    const PreviousOrder = useTypedSelector((store) => store.PreviousOrders);
    const {orders, isFetching, error} = PreviousOrder as IStatePreviousOrders;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    let products:ProductType[] = [];
    orders.map(order => order.product.map(product => products.push(product)));

    useEffect(() => {
        stableDispatch(GetPreviousOrders());
    }, []);

    return (
        <BuyHistoryStyle>
            <H2>История покупок</H2>
            <ProductsList products={products}></ProductsList>
        </BuyHistoryStyle>
    );
};

export default BuyHistory;