import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {OrderType} from "src/utils/types";
import {
    GET_COMPANY_PREVIOUS_ORDERS_FAIL,
    GET_COMPANY_PREVIOUS_ORDERS_REQUEST, GET_COMPANY_PREVIOUS_ORDERS_SUCCESS
} from "src/actions/CompanyPreviousOrdersAction/CompanyPreviousOrdersAction.types";

export const GetCompanyPreviousOrders = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_COMPANY_PREVIOUS_ORDERS_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/order/company/previous_orders/',
        success: (success) => {
            dispatch({
                type: GET_COMPANY_PREVIOUS_ORDERS_SUCCESS,
                payload: success as OrderType[]
            })
        },
        error: (error) => {
            dispatch({
                type: GET_COMPANY_PREVIOUS_ORDERS_FAIL,
                payload: error
            })
        }, auth: true})(dispatch);
}