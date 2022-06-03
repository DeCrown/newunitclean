import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {
    GET_PRICE_LIST_FAIL,
    GET_PRICE_LIST_REQUEST,
    GET_PRICE_LIST_SUCCESS
} from "src/actions/PriceListAction/PriceListAction.types";

export const GetPriceList = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_PRICE_LIST_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/products_price_list/',
        success: (success) => {
            dispatch({
                type: GET_PRICE_LIST_SUCCESS,
                payload: success
            })
        },
        error: (error) => {
            dispatch({
                type: GET_PRICE_LIST_FAIL,
                payload: error
            })
        }, auth: true})(dispatch);
}