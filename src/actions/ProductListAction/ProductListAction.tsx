import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {
    GET_PRODUCT_LIST_FAIL,
    GET_PRODUCT_LIST_REQUEST,
    GET_PRODUCT_LIST_SUCCESS
} from "src/actions/ProductListAction/ProductListAction.types";

export const GetProductList = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_PRODUCT_LIST_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/list_products/',
        success: (success) => {
            dispatch({
                type: GET_PRODUCT_LIST_SUCCESS,
                payload: {
                    products: success
                }
            })
        },
        error: (error) => {
            dispatch({
                type: GET_PRODUCT_LIST_FAIL,
                payload: error
            })
        }})(dispatch);
}