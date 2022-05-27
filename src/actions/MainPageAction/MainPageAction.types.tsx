import {OrderType, ProductType} from "src/utils/types";

export const GET_MAIN_PAGE_REQUEST = 'GET_MAIN_PAGE_REQUEST';
export const GET_MAIN_PAGE_SUCCESS = 'GET_MAIN_PAGE_SUCCESS';
export const GET_MAIN_PAGE_FAIL = 'GET_MAIN_PAGE_FAIL';

interface RequestMainPageAction {
  type: typeof GET_MAIN_PAGE_REQUEST;
}

interface SuccessMainPageAction {
  type: typeof GET_MAIN_PAGE_SUCCESS;
  payload: ProductType[];
}

interface FailMainPageAction {
  type: typeof GET_MAIN_PAGE_FAIL;
  payload: null | Error;
}

export type MainPageAction = RequestMainPageAction | SuccessMainPageAction | FailMainPageAction;