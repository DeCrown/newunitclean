import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {
    GET_MAIN_PAGE_FAIL,
    GET_MAIN_PAGE_REQUEST,
    GET_MAIN_PAGE_SUCCESS
} from "src/actions/MainPageAction/MainPageAction.types";
import {ProductType} from "src/utils/types";

export const GetMainPage = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_MAIN_PAGE_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/list_main_page_products/',
        success: (success) => {
            dispatch({
                type: GET_MAIN_PAGE_SUCCESS,
                payload: success as ProductType[]
            })
        },
        error: (error) => {
            dispatch({
                type: GET_MAIN_PAGE_FAIL,
                payload: error
            })
        }})(dispatch);
}