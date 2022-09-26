import { Dispatch } from 'redux'
import {ApiMethod} from "src/api/APIMethod";
import {ProductType} from "src/utils/types";
import {
    GET_PRODUCT_FAIL,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS
} from "src/actions/ProductAction/ProductAction.types";
import {getAuth} from "src/store/localStorage";

export const GetProduct = (product_id: string | number | undefined, currentSize?: number, auth: boolean = getAuth().isAuthorized) => (dispatch:Dispatch) => {
    dispatch({
        type: GET_PRODUCT_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/product/' + product_id + '/', data: currentSize ? {product_size: currentSize} : {}, auth: auth})
        .then(success => {
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: success as ProductType
            })
        })
        .catch(error => {
            dispatch({
                type: GET_PRODUCT_FAIL,
                payload: error
            })
            if (error.response.status == 401) {
                GetProduct(product_id, currentSize ? currentSize : undefined, false)(dispatch)
            }
        })
}