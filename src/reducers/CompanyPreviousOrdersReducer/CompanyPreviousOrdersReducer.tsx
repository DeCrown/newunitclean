import {ProductType} from "src/utils/types";
import {
  IStateCompanyPreviousOrders
} from "src/reducers/CompanyPreviousOrdersReducer/CompanyPreviousOrdersReducer.types";
import {
  CompanyPreviousOrdersAction,
  GET_COMPANY_PREVIOUS_ORDERS_FAIL,
  GET_COMPANY_PREVIOUS_ORDERS_REQUEST, GET_COMPANY_PREVIOUS_ORDERS_SUCCESS
} from "src/actions/CompanyPreviousOrdersAction/CompanyPreviousOrdersAction.types";

const initialStateCompanyPreviousOrders = {
  isFetching: false,
  error: null,
  orders: []
};


export function CompanyPreviousOrdersReducer(state: IStateCompanyPreviousOrders = initialStateCompanyPreviousOrders, action: CompanyPreviousOrdersAction) {
  switch (action.type) {
    case GET_COMPANY_PREVIOUS_ORDERS_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_COMPANY_PREVIOUS_ORDERS_SUCCESS:
      return { ...state,
        orders: action.payload, isFetching: false, error: null };
    case GET_COMPANY_PREVIOUS_ORDERS_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
