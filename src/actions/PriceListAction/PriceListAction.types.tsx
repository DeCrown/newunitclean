export const GET_PRICE_LIST_REQUEST = 'GET_PRICE_LIST_REQUEST';
export const GET_PRICE_LIST_SUCCESS = 'GET_PRICE_LIST_SUCCESS';
export const GET_PRICE_LIST_FAIL = 'GET_PRICE_LIST_FAIL';

interface RequestPriceListAction {
  type: typeof GET_PRICE_LIST_REQUEST;
}

interface SuccessPriceListAction {
  type: typeof GET_PRICE_LIST_SUCCESS;
  payload: {
    data: [],
    headers: string[]
  };
}

interface FailPriceListAction {
  type: typeof GET_PRICE_LIST_FAIL;
  payload: null | Error;
}

export type PriceListAction = RequestPriceListAction | SuccessPriceListAction | FailPriceListAction;