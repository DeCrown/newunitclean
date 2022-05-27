import {CategoryType} from "src/utils/types";

export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

interface RequestCategoriesAction {
  type: typeof GET_CATEGORIES_REQUEST;
}

interface SuccessCategoriesAction {
  type: typeof GET_CATEGORIES_SUCCESS;
  payload: {
    categories: CategoryType[]
  };
}

interface FailCategoriesAction {
  type: typeof GET_CATEGORIES_FAIL;
  payload: null | Error;
}

export type CategoriesAction = RequestCategoriesAction | SuccessCategoriesAction | FailCategoriesAction;