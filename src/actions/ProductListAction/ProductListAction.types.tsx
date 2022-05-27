import {ProductType} from "src/utils/types";

export const GET_PRODUCT_LIST_REQUEST = 'GET_PRODUCT_LIST_REQUEST';
export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS';
export const GET_PRODUCT_LIST_FAIL = 'GET_PRODUCT_LIST_FAIL';

interface RequestProductListAction {
  type: typeof GET_PRODUCT_LIST_REQUEST;
}

interface SuccessProductListAction {
  type: typeof GET_PRODUCT_LIST_SUCCESS;
  payload: {
    products: ProductType[]
  };
}

interface FailProductListAction {
  type: typeof GET_PRODUCT_LIST_FAIL;
  payload: null | Error;
}

export type ProductListAction = RequestProductListAction | SuccessProductListAction | FailProductListAction;