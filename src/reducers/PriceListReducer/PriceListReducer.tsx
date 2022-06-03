import {IStatePriceList} from './PriceListReducer.types';
import {
  GET_PRICE_LIST_FAIL,
  GET_PRICE_LIST_REQUEST,
  GET_PRICE_LIST_SUCCESS, PriceListAction
} from "src/actions/PriceListAction/PriceListAction.types";

const initialStatePriceList = {
  isFetching: false,
  error: null,
  data: [],
  headers: []
};

export function PriceListReducer(state: IStatePriceList = initialStatePriceList, action: PriceListAction) {
  switch (action.type) {
    case GET_PRICE_LIST_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_PRICE_LIST_SUCCESS:
      return { ...state,
        data: action.payload.data, headers: action.payload.headers, isFetching: false, error: null };
    case GET_PRICE_LIST_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
