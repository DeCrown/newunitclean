import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {ApiMethod} from "src/api/APIMethod";
import {
    GET_MOST_TRADING_FAIL,
    GET_MOST_TRADING_REQUEST,
    GET_MOST_TRADING_SUCCESS
} from "src/actions/MostTradingAction/MostTradingAction.types";
import {ProductType} from "src/utils/types";

export const GetMostTrading = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_MOST_TRADING_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/list_trending_products/'})
        .then(success => {
            dispatch({
                type: GET_MOST_TRADING_SUCCESS,
                payload: success as ProductType[]
            })
        })
        .catch(error => {
            dispatch({
                type: GET_MOST_TRADING_FAIL,
                payload: error
            })
        })
}