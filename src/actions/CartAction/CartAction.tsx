import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS} from "src/actions/CartAction/CartAction.types";
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {OrderType} from "src/utils/types";

export const GetCart = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_CART_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/order/',
        success: (success) => {
            dispatch({
                type: GET_CART_SUCCESS,
                payload: success as OrderType
            })
        },
        error: (error) => {
            dispatch({
                type: GET_CART_FAIL,
                payload: error
            })
        }, auth: true})(dispatch);
}