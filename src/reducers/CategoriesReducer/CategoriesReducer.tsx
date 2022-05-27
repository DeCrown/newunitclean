import {IStateCategories} from './CategoriesReducer.types';
import {
  CategoriesAction, GET_CATEGORIES_FAIL,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS
} from "src/actions/CategoriesAction/CategoriesAction.types";

const initialStateCategories = {
  isFetching: false,
  error: null,
  categories: []
};


export function CategoriesReducer(state: IStateCategories = initialStateCategories, action: CategoriesAction) {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_CATEGORIES_SUCCESS:
      return { ...state,
        categories: action.payload.categories, isFetching: false, error: null };
    case GET_CATEGORIES_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
