import {IStateSearch} from './SearchReducer.types';
import {
  GET_SEARCH_CACHE_SUCCESS,
  GET_SEARCH_FAIL,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  SearchAction
} from "src/actions/SearchAction/SearchAction.types";

const initialStateSearch = {
  isFetching: false,
  error: null,
  results: [],
  cache: []
};


export function SearchReducer(state: IStateSearch = initialStateSearch, action: SearchAction) {
  switch (action.type) {
    case GET_SEARCH_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_SEARCH_SUCCESS:
      return { ...state,
        results: action.payload, isFetching: false, error: null };
    case GET_SEARCH_CACHE_SUCCESS:
      return { ...state,
        cache: action.payload, isFetching: false, error: null };
    case GET_SEARCH_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
