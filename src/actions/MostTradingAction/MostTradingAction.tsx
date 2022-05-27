import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {
    GET_MOST_TRADING_FAIL,
    GET_MOST_TRADING_REQUEST,
    GET_MOST_TRADING_SUCCESS
} from "src/actions/MostTradingAction/MostTradingAction.types";
import {ProductType} from "src/utils/types";

export const GetMostTrading = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_MOST_TRADING_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/list_trending_products/',
        success: (success) => {
            console.log(success)
            dispatch({
                type: GET_MOST_TRADING_SUCCESS,
                payload: success as ProductType[]
            })
        },
        error: (error) => {
            dispatch({
                type: GET_MOST_TRADING_FAIL,
                payload: error
            })
        }})(dispatch);
}