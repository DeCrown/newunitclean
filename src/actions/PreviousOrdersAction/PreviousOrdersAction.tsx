import { Dispatch } from 'redux'
import {ApiMethod} from "src/api/APIMethod";
import {OrderType} from "src/utils/types";
import {
    GET_PREVIOUS_ORDERS_FAIL,
    GET_PREVIOUS_ORDERS_REQUEST,
    GET_PREVIOUS_ORDERS_SUCCESS
} from "src/actions/PreviousOrdersAction/PreviousOrdersAction.types";

export const GetPreviousOrders = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_PREVIOUS_ORDERS_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/order/previous_orders/', auth: true})
        .then(success => {
            dispatch({
                type: GET_PREVIOUS_ORDERS_SUCCESS,
                payload: success as OrderType[]
            })
        })
        .catch(error => {
            dispatch({
                type: GET_PREVIOUS_ORDERS_FAIL,
                payload: error
            })
        })
}