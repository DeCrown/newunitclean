import {OrderType} from "src/utils/types";

export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAIL = 'GET_CART_FAIL';

interface RequestCartAction {
  type: typeof GET_CART_REQUEST;
}

interface SuccessCartAction {
  type: typeof GET_CART_SUCCESS;
  payload: OrderType[];
}

interface FailCartAction {
  type: typeof GET_CART_FAIL;
  payload: null | Error;
}

export type CartAction = RequestCartAction | SuccessCartAction | FailCartAction;