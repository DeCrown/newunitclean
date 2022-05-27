import {Action} from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {ProductType} from "src/utils/types";
import {
    GET_SEARCH_CACHE_SUCCESS,
    GET_SEARCH_FAIL,
    GET_SEARCH_REQUEST,
    GET_SEARCH_SUCCESS
} from "src/actions/SearchAction/SearchAction.types";

export const GetSearch = (title: string, cache: boolean = false) : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_SEARCH_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/list_products/', data: {title: title},
        success: (success) => {
        dispatch({
            type: cache ? GET_SEARCH_CACHE_SUCCESS : GET_SEARCH_SUCCESS,
            payload: success as ProductType[]
        })
        },
        error: (error) => {
            dispatch({
                type: GET_SEARCH_FAIL,
                payload: error
            })
        }})(dispatch);
}