import {EmployeeType} from "src/utils/types";

export const GET_EMPLOYEE_REQUEST = 'GET_EMPLOYEE_REQUEST';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export const GET_EMPLOYEE_FAIL = 'GET_EMPLOYEE_FAIL';

interface RequestEmployeeAction {
  type: typeof GET_EMPLOYEE_REQUEST;
}

interface SuccessEmployeeAction {
  type: typeof GET_EMPLOYEE_SUCCESS;
  payload: EmployeeType[];
}

interface FailEmployeeAction {
  type: typeof GET_EMPLOYEE_FAIL;
  payload: null | Error;
}

export type EmployeeAction = RequestEmployeeAction | SuccessEmployeeAction | FailEmployeeAction;