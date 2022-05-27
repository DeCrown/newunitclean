import {IStateCart} from './CartReducer.types';
import {CartAction, GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS} from "src/actions/CartAction/CartAction.types";

const initialStateCart = {
  isFetching: false,
  error: null,
  cart: {
    id: -1,
    product: [],
    full_price: 0,
    payment_type: null,
    receiving_type: null,
    address: null,
    promo_code: null
  }
};


export function CartReducer(state: IStateCart = initialStateCart, action: CartAction) {
  switch (action.type) {
    case GET_CART_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_CART_SUCCESS:
      return { ...state,
        cart: action.payload, isFetching: false, error: null };
    case GET_CART_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
