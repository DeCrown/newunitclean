import {ProductType, PromotionType} from "src/utils/types";

export const GET_PROMOTIONS_REQUEST = 'GET_PROMOTIONS_REQUEST';
export const GET_PROMOTIONS_SUCCESS = 'GET_PROMOTIONS_SUCCESS';
export const GET_PROMOTIONS_FAIL = 'GET_PROMOTIONS_FAIL';

interface RequestPromotionsAction {
  type: typeof GET_PROMOTIONS_REQUEST;
}

interface SuccessPromotionsAction {
  type: typeof GET_PROMOTIONS_SUCCESS;
  payload: ProductType[];
}

interface FailPromotionsAction {
  type: typeof GET_PROMOTIONS_FAIL;
  payload: null | Error;
}

export type PromotionsAction = RequestPromotionsAction | SuccessPromotionsAction | FailPromotionsAction;