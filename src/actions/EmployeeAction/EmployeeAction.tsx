import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {EmployeeType, OrderType} from "src/utils/types";
import {
    GET_EMPLOYEE_FAIL,
    GET_EMPLOYEE_REQUEST,
    GET_EMPLOYEE_SUCCESS
} from "src/actions/EmployeeAction/EmployeeAction.types";

export const GetEmployee = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_EMPLOYEE_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/employee/api/v2/detail/',
        success: (success) => {
            dispatch({
                type: GET_EMPLOYEE_SUCCESS,
                payload: success as EmployeeType
            })
        },
        error: (error) => {
            dispatch({
                type: GET_EMPLOYEE_FAIL,
                payload: error
            })
        }, auth: true})(dispatch);
}

export const PatchEmployee = (data: any) : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_EMPLOYEE_REQUEST
    })
    AppendApiMethod({func: 'patch', url: '/employee/api/v2/detail/', data: data,
        success: (success) => {
            dispatch({
                type: GET_EMPLOYEE_SUCCESS,
                payload: success as EmployeeType
            })
        },
        error: (error) => {
            dispatch({
                type: GET_EMPLOYEE_FAIL,
                payload: error
            })
        }, auth: true})(dispatch);
}