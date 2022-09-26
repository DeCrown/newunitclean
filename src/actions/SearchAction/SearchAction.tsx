import {Dispatch} from 'redux'
import {ApiMethod} from "src/api/APIMethod";
import {ProductType} from "src/utils/types";
import {
    GET_SEARCH_CACHE_SUCCESS,
    GET_SEARCH_FAIL,
    GET_SEARCH_REQUEST,
    GET_SEARCH_SUCCESS
} from "src/actions/SearchAction/SearchAction.types";

export const GetSearch = (title: string, cache: boolean = false) => (dispatch:Dispatch) => {
    dispatch({
        type: GET_SEARCH_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/list_products/', data: {title: title}})
        .then(success => {
            dispatch({
                type: cache ? GET_SEARCH_CACHE_SUCCESS : GET_SEARCH_SUCCESS,
                payload: success as ProductType[]
            })
        })
        .catch(error => {
            dispatch({
                type: GET_SEARCH_FAIL,
                payload: error
            })
        })
}