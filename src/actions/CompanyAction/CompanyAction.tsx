import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {CompanyType} from "src/utils/types";
import {
    GET_COMPANY_FAIL,
    GET_COMPANY_REQUEST,
    GET_COMPANY_SUCCESS
} from "src/actions/CompanyAction/CompanyAction.types";

export const GetCompany = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_COMPANY_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/employee/api/v2/company/detail/',
        success: (success) => {
            dispatch({
                type: GET_COMPANY_SUCCESS,
                payload: success as CompanyType
            })
        },
        error: (error) => {
            dispatch({
                type: GET_COMPANY_FAIL,
                payload: error
            })
        }, auth: true})(dispatch);
}

export const PatchCompany = (data: any) : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_COMPANY_REQUEST
    })
    AppendApiMethod({func: 'patch', url: '/employee/api/v2/company/detail/', data: data,
        success: (success) => {
            dispatch({
                type: GET_COMPANY_SUCCESS,
                payload: success as CompanyType
            })
        },
        error: (error) => {
            dispatch({
                type: GET_COMPANY_FAIL,
                payload: error
            })
        }, auth: true})(dispatch);
}