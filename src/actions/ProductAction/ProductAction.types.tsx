import {ProductType} from "src/utils/types";

export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';

interface RequestProductAction {
  type: typeof GET_PRODUCT_REQUEST;
}

interface SuccessProductAction {
  type: typeof GET_PRODUCT_SUCCESS;
  payload: ProductType[];
}

interface FailProductAction {
  type: typeof GET_PRODUCT_FAIL;
  payload: null | Error;
}

export type ProductAction = RequestProductAction | SuccessProductAction | FailProductAction;