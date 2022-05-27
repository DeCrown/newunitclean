import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {OrderType} from "src/utils/types";
import {
    GET_PREVIOUS_ORDERS_FAIL,
    GET_PREVIOUS_ORDERS_REQUEST,
    GET_PREVIOUS_ORDERS_SUCCESS
} from "src/actions/PreviousOrdersAction/PreviousOrdersAction.types";

export const GetPreviousOrders = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_PREVIOUS_ORDERS_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/order/previous_orders/',
        success: (success) => {
            dispatch({
                type: GET_PREVIOUS_ORDERS_SUCCESS,
                payload: success as OrderType[]
            })
        },
        error: (error) => {
            dispatch({
                type: GET_PREVIOUS_ORDERS_FAIL,
                payload: error
            })
        }, auth: true})(dispatch);
}