import {IStateMainPage} from "src/reducers/MainPageReducer/MainPageReducer.types";
import {
  GET_MAIN_PAGE_FAIL,
  GET_MAIN_PAGE_REQUEST,
  GET_MAIN_PAGE_SUCCESS, MainPageAction
} from "src/actions/MainPageAction/MainPageAction.types";

const initialStateCart = {
  isFetching: false,
  error: null,
  products: []
};


export function MainPageReducer(state: IStateMainPage = initialStateCart, action: MainPageAction) {
  switch (action.type) {
    case GET_MAIN_PAGE_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_MAIN_PAGE_SUCCESS:
      return { ...state,
        products: action.payload, isFetching: false, error: null };
    case GET_MAIN_PAGE_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
