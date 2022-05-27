import {ProductType} from "src/utils/types";

export const GET_SEARCH_REQUEST = 'GET_SEARCH_REQUEST';
export const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS';
export const GET_SEARCH_CACHE_SUCCESS = 'GET_SEARCH_CACHE_SUCCESS';
export const GET_SEARCH_FAIL = 'GET_SEARCH_FAIL';

interface RequestSearchAction {
  type: typeof GET_SEARCH_REQUEST;
}

interface SuccessSearchAction {
  type: typeof GET_SEARCH_SUCCESS;
  payload: ProductType[];
}

interface CacheSearchAction {
  type: typeof GET_SEARCH_CACHE_SUCCESS;
  payload: ProductType[];
}

interface FailSearchAction {
  type: typeof GET_SEARCH_FAIL;
  payload: null | Error;
}

export type SearchAction = RequestSearchAction | SuccessSearchAction | FailSearchAction | CacheSearchAction;