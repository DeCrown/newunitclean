import {IStateMostTrading} from './MostTradingReducer.types';
import {
  GET_MOST_TRADING_FAIL,
  GET_MOST_TRADING_REQUEST,
  GET_MOST_TRADING_SUCCESS,
  MostTradingAction
} from "src/actions/MostTradingAction/MostTradingAction.types";

const initialStateCart = {
  isFetching: false,
  error: null,
  products: []
};

export function MostTradingReducer(state: IStateMostTrading = initialStateCart, action: MostTradingAction) {
  switch (action.type) {
    case GET_MOST_TRADING_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_MOST_TRADING_SUCCESS:
      return { ...state,
        products: action.payload, isFetching: false, error: null };
    case GET_MOST_TRADING_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
