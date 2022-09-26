import { Dispatch } from 'redux'
import {ApiMethod} from "src/api/APIMethod";
import {ProductType} from "src/utils/types";
import {
    GET_PROMOTIONS_FAIL,
    GET_PROMOTIONS_REQUEST,
    GET_PROMOTIONS_SUCCESS
} from "src/actions/PromotionsAction/PromotionsAction.types";

export const GetPromotions = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_PROMOTIONS_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/list_discount_products/'})
        .then(success => {
            dispatch({
                type: GET_PROMOTIONS_SUCCESS,
                payload: success as ProductType[]
            })
        })
        .catch(error => {
            dispatch({
                type: GET_PROMOTIONS_FAIL,
                payload: error
            })
        })
}