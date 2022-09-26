import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {ApiMethod} from "src/api/APIMethod";
import {
    GET_MAIN_PAGE_FAIL,
    GET_MAIN_PAGE_REQUEST,
    GET_MAIN_PAGE_SUCCESS
} from "src/actions/MainPageAction/MainPageAction.types";
import {ProductType} from "src/utils/types";

export const GetMainPage = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_MAIN_PAGE_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/list_main_page_products/'})
        .then(success => {
            dispatch({
                type: GET_MAIN_PAGE_SUCCESS,
                payload: success as ProductType[]
            })
        })
        .catch(error => {
            dispatch({
                type: GET_MAIN_PAGE_FAIL,
                payload: error
            })
        })
}