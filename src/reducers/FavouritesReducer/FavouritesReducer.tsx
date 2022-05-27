import {IStateFavourites} from './FavouritesReducer.types';
import {
  FavouritesAction, GET_FAVOURITES_FAIL,
  GET_FAVOURITES_REQUEST,
  GET_FAVOURITES_SUCCESS
} from "src/actions/FavouritesAction/FavouritesAction.types";

const initialStateFavourites = {
  isFetching: false,
  error: null,
  products: []
};

export function FavouritesReducer(state: IStateFavourites = initialStateFavourites, action: FavouritesAction) {
  switch (action.type) {
    case GET_FAVOURITES_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_FAVOURITES_SUCCESS:
      return { ...state,
        products: action.payload, isFetching: false, error: null };
    case GET_FAVOURITES_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
