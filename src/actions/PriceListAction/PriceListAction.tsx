import { Dispatch } from 'redux'
import {ApiMethod} from "src/api/APIMethod";
import {
    GET_PRICE_LIST_FAIL,
    GET_PRICE_LIST_REQUEST,
    GET_PRICE_LIST_SUCCESS
} from "src/actions/PriceListAction/PriceListAction.types";

export const GetPriceList = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_PRICE_LIST_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/products_price_list/', auth: true})
        .then(success => {
            dispatch({
                type: GET_PRICE_LIST_SUCCESS,
                payload: success
            })
        })
        .catch(error => {
            dispatch({
                type: GET_PRICE_LIST_FAIL,
                payload: error
            })
        })
}