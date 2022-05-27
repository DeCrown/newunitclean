import {ProductType} from "src/utils/types";
import {IStatePreviousOrders} from "src/reducers/PreviousOrdersReducer/PreviousOrdersReducer.types";
import {
  GET_PREVIOUS_ORDERS_FAIL,
  GET_PREVIOUS_ORDERS_REQUEST, GET_PREVIOUS_ORDERS_SUCCESS,
  PreviousOrdersAction
} from "src/actions/PreviousOrdersAction/PreviousOrdersAction.types";

const initialStatePreviousOrders = {
  isFetching: false,
  error: null,
  orders: []
};


export function PreviousOrdersReducer(state: IStatePreviousOrders = initialStatePreviousOrders, action: PreviousOrdersAction) {
  switch (action.type) {
    case GET_PREVIOUS_ORDERS_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_PREVIOUS_ORDERS_SUCCESS:
      return { ...state,
        orders: action.payload, isFetching: false, error: null };
    case GET_PREVIOUS_ORDERS_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
