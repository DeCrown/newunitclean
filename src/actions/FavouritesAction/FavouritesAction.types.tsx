import {ProductType} from "src/utils/types";

export const GET_FAVOURITES_REQUEST = 'GET_FAVOURITES_REQUEST';
export const GET_FAVOURITES_SUCCESS = 'GET_FAVOURITES_SUCCESS';
export const GET_FAVOURITES_FAIL = 'GET_FAVOURITES_FAIL';

interface RequestFavouritesAction {
  type: typeof GET_FAVOURITES_REQUEST;
}

interface SuccessFavouritesAction {
  type: typeof GET_FAVOURITES_SUCCESS;
  payload: ProductType[];
}

interface FailFavouritesAction {
  type: typeof GET_FAVOURITES_FAIL;
  payload: null | Error;
}

export type FavouritesAction = RequestFavouritesAction | SuccessFavouritesAction | FailFavouritesAction;