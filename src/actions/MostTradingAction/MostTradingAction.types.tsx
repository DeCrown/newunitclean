import {ProductType} from "src/utils/types";

export const GET_MOST_TRADING_REQUEST = 'GET_MOST_TRADING_REQUEST';
export const GET_MOST_TRADING_SUCCESS = 'GET_MOST_TRADING_SUCCESS';
export const GET_MOST_TRADING_FAIL = 'GET_MOST_TRADING_FAIL';

interface RequestMostTradingAction {
  type: typeof GET_MOST_TRADING_REQUEST;
}

interface SuccessMostTradingAction {
  type: typeof GET_MOST_TRADING_SUCCESS;
  payload: ProductType[];
}

interface FailMostTradingAction {
  type: typeof GET_MOST_TRADING_FAIL;
  payload: null | Error;
}

export type MostTradingAction = RequestMostTradingAction | SuccessMostTradingAction | FailMostTradingAction;