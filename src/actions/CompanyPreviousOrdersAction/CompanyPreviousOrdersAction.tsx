import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {ApiMethod} from "src/api/APIMethod";
import {OrderType} from "src/utils/types";
import {
    GET_COMPANY_PREVIOUS_ORDERS_FAIL,
    GET_COMPANY_PREVIOUS_ORDERS_REQUEST, GET_COMPANY_PREVIOUS_ORDERS_SUCCESS
} from "src/actions/CompanyPreviousOrdersAction/CompanyPreviousOrdersAction.types";

export const GetCompanyPreviousOrders = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_COMPANY_PREVIOUS_ORDERS_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/order/company/previous_orders/', auth: true})
        .then(success => {
            dispatch({
                type: GET_COMPANY_PREVIOUS_ORDERS_SUCCESS,
                payload: success as OrderType[]
            })
        })
        .catch(error => {
            dispatch({
                type: GET_COMPANY_PREVIOUS_ORDERS_FAIL,
                payload: error
            })
        });
}