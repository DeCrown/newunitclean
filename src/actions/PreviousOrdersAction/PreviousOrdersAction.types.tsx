import {OrderType} from "src/utils/types";

export const GET_PREVIOUS_ORDERS_REQUEST = 'GET_PREVIOUS_ORDERS_REQUEST';
export const GET_PREVIOUS_ORDERS_SUCCESS = 'GET_PREVIOUS_ORDERS_SUCCESS';
export const GET_PREVIOUS_ORDERS_FAIL = 'GET_PREVIOUS_ORDERS_FAIL';

interface RequestPreviousOrdersAction {
  type: typeof GET_PREVIOUS_ORDERS_REQUEST;
}

interface SuccessPreviousOrdersAction {
  type: typeof GET_PREVIOUS_ORDERS_SUCCESS;
  payload: OrderType[];
}

interface FailPreviousOrdersAction {
  type: typeof GET_PREVIOUS_ORDERS_FAIL;
  payload: null | Error;
}

export type PreviousOrdersAction = RequestPreviousOrdersAction | SuccessPreviousOrdersAction | FailPreviousOrdersAction;