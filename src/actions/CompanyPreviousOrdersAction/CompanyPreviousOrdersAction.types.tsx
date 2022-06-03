import {OrderType} from "src/utils/types";

export const GET_COMPANY_PREVIOUS_ORDERS_REQUEST = 'GET_COMPANY_PREVIOUS_ORDERS_REQUEST';
export const GET_COMPANY_PREVIOUS_ORDERS_SUCCESS = 'GET_COMPANY_PREVIOUS_ORDERS_SUCCESS';
export const GET_COMPANY_PREVIOUS_ORDERS_FAIL = 'GET_COMPANY_PREVIOUS_ORDERS_FAIL';

interface RequestCompanyPreviousOrdersAction {
  type: typeof GET_COMPANY_PREVIOUS_ORDERS_REQUEST;
}

interface SuccessCompanyPreviousOrdersAction {
  type: typeof GET_COMPANY_PREVIOUS_ORDERS_SUCCESS;
  payload: OrderType[];
}

interface FailCompanyPreviousOrdersAction {
  type: typeof GET_COMPANY_PREVIOUS_ORDERS_FAIL;
  payload: null | Error;
}

export type CompanyPreviousOrdersAction = RequestCompanyPreviousOrdersAction | SuccessCompanyPreviousOrdersAction | FailCompanyPreviousOrdersAction;