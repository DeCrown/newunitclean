import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {ProductType} from "src/utils/types";
import {
    GET_PRODUCT_FAIL,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS
} from "src/actions/ProductAction/ProductAction.types";
import {getAuth} from "src/store/localStorage";

export const GetProduct = (product_id: string | number | undefined, currentSize?: string) : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_PRODUCT_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/product/' + product_id + '/', data: currentSize ? {product_size: currentSize} : {},
        success: (success) => {
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: success as ProductType
            })
        },
        error: (error) => {
            dispatch({
                type: GET_PRODUCT_FAIL,
                payload: error
            })
        }, auth: getAuth().isAuthorized})(dispatch);
}