import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {ApiMethod} from "src/api/APIMethod";
import {CompanyType} from "src/utils/types";
import {
    GET_COMPANY_FAIL,
    GET_COMPANY_REQUEST,
    GET_COMPANY_SUCCESS
} from "src/actions/CompanyAction/CompanyAction.types";

export const GetCompany = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_COMPANY_REQUEST
    })
    ApiMethod({func: 'get', url: '/employee/api/v2/company/detail/', auth: true})
        .then(success => {
            dispatch({
                type: GET_COMPANY_SUCCESS,
                payload: success as CompanyType
            })
        })
        .catch(error => {
            dispatch({
                type: GET_COMPANY_FAIL,
                payload: error
            })
        });
}

export const PatchCompany = (data: any) => (dispatch:Dispatch) => {
    dispatch({
        type: GET_COMPANY_REQUEST
    })
    ApiMethod({func: 'patch', url: '/employee/api/v2/company/detail/', data: data, auth: true})
        .then(success => {
            dispatch({
                type: GET_COMPANY_SUCCESS,
                payload: success as CompanyType
            })
        })
        .catch(error => {
            dispatch({
                type: GET_COMPANY_FAIL,
                payload: error
            })
        });
}