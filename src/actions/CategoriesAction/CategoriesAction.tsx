import { Dispatch } from 'redux'
import {ApiMethod} from "src/api/APIMethod";
import {
    GET_CATEGORIES_FAIL,
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS
} from "src/actions/CategoriesAction/CategoriesAction.types";

export const GetCategories = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_CATEGORIES_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/list_product_groups/'})
        .then(success => {
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: {
                    categories: success
                }
            })
        })
        .catch(error => {
            dispatch({
                type: GET_CATEGORIES_FAIL,
                payload: error
            })
        });
}