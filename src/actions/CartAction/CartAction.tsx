import { Dispatch } from 'redux'
import {GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS} from "src/actions/CartAction/CartAction.types";
import {ApiMethod} from "src/api/APIMethod";
import {OrderType} from "src/utils/types";

export const GetCart = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_CART_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/order/', auth: true})
        .then(success => {
            dispatch({
                type: GET_CART_SUCCESS,
                payload: success as OrderType
            })
        })
        .catch(error => {
            dispatch({
                type: GET_CART_FAIL,
                payload: error
            })
        })
}