import {IStateProductList} from './ProductListReducer.types';
import {
  GET_PRODUCT_LIST_FAIL,
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  ProductListAction
} from "src/actions/ProductListAction/ProductListAction.types";

const initialStateProductList = {
  isFetching: false,
  error: null,
  products: []
};


export function ProductListReducer(state: IStateProductList = initialStateProductList, action: ProductListAction) {
  switch (action.type) {
    case GET_PRODUCT_LIST_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_PRODUCT_LIST_SUCCESS:
      return { ...state,
        products: action.payload.products, isFetching: false, error: null };
    case GET_PRODUCT_LIST_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
