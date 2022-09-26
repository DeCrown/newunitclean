import { Dispatch } from 'redux'
import {ApiMethod} from "src/api/APIMethod";
import {
    GET_PRODUCT_LIST_FAIL,
    GET_PRODUCT_LIST_REQUEST,
    GET_PRODUCT_LIST_SUCCESS
} from "src/actions/ProductListAction/ProductListAction.types";

export const GetProductList = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_PRODUCT_LIST_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/list_products/'})
        .then(success => {
            dispatch({
                type: GET_PRODUCT_LIST_SUCCESS,
                payload: {
                    products: success
                }
            })
        })
        .catch(error => {
            dispatch({
                type: GET_PRODUCT_LIST_FAIL,
                payload: error
            })
        })
}