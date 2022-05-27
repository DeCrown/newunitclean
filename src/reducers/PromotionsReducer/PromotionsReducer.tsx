import {IStatePromotions} from './PromotionsReducer.types';
import {
  GET_PROMOTIONS_FAIL,
  GET_PROMOTIONS_REQUEST,
  GET_PROMOTIONS_SUCCESS, PromotionsAction
} from "src/actions/PromotionsAction/PromotionsAction.types";

const initialStatePromotions = {
  isFetching: false,
  error: null,
  promotions: []
};

export function PromotionsReducer(state: IStatePromotions = initialStatePromotions, action: PromotionsAction) {
  switch (action.type) {
    case GET_PROMOTIONS_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_PROMOTIONS_SUCCESS:
      return { ...state,
        promotions: action.payload, isFetching: false, error: null };
    case GET_PROMOTIONS_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
