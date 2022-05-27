import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {
    GET_CATEGORIES_FAIL,
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS
} from "src/actions/CategoriesAction/CategoriesAction.types";

export const GetCategories = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_CATEGORIES_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/list_product_groups/',
        success: (success) => {
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: {
                    categories: success
                }
            })
        },
        error: (error) => {
            dispatch({
                type: GET_CATEGORIES_FAIL,
                payload: error
            })
        }})(dispatch);
}