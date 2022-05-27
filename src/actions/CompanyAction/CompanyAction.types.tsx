import {CompanyType} from "src/utils/types";

export const GET_COMPANY_REQUEST = 'GET_COMPANY_REQUEST';
export const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS';
export const GET_COMPANY_FAIL = 'GET_COMPANY_FAIL';

interface RequestCompanyAction {
  type: typeof GET_COMPANY_REQUEST;
}

interface SuccessCompanyAction {
  type: typeof GET_COMPANY_SUCCESS;
  payload: CompanyType[];
}

interface FailCompanyAction {
  type: typeof GET_COMPANY_FAIL;
  payload: null | Error;
}

export type CompanyAction = RequestCompanyAction | SuccessCompanyAction | FailCompanyAction;