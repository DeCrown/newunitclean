import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {ApiMethod} from "src/api/APIMethod";
import {EmployeeType, OrderType} from "src/utils/types";
import {
    GET_EMPLOYEE_FAIL,
    GET_EMPLOYEE_REQUEST,
    GET_EMPLOYEE_SUCCESS
} from "src/actions/EmployeeAction/EmployeeAction.types";

export const GetEmployee = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_EMPLOYEE_REQUEST
    })
    ApiMethod({func: 'get', url: '/employee/api/v2/detail/', auth: true})
        .then(success => {
            dispatch({
                type: GET_EMPLOYEE_SUCCESS,
                payload: success as EmployeeType
            })
        })
        .catch(error => {
            dispatch({
                type: GET_EMPLOYEE_FAIL,
                payload: error
            })
        });
}

export const PatchEmployee = (data: any) => (dispatch:Dispatch) => {
    dispatch({
        type: GET_EMPLOYEE_REQUEST
    })
    ApiMethod({func: 'patch', url: '/employee/api/v2/detail/', data: data, auth: true })
        .then(success => {
            dispatch({
                type: GET_EMPLOYEE_SUCCESS,
                payload: success as EmployeeType
            })
        })
        .catch(error => {
            dispatch({
                type: GET_EMPLOYEE_FAIL,
                payload: error
            })
        });
}