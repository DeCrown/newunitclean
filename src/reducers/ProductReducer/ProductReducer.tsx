import {IStateProduct} from './ProductReducer.types';
import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS, ProductAction
} from "src/actions/ProductAction/ProductAction.types";

const initialStateCart = {
  isFetching: false,
  error: null,
  product: {
    id: -1,
    group: undefined,
    image: [],
    title: '',
    description: '',
    price: 0,
    sizes: []
  }
};


export function ProductReducer(state: IStateProduct = initialStateCart, action: ProductAction) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_PRODUCT_SUCCESS:
      return { ...state,
        product: action.payload, isFetching: false, error: null };
    case GET_PRODUCT_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
