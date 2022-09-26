import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {ApiMethod} from "src/api/APIMethod";
import {
    GET_FAVOURITES_FAIL,
    GET_FAVOURITES_REQUEST,
    GET_FAVOURITES_SUCCESS
} from "src/actions/FavouritesAction/FavouritesAction.types";
import {ProductType} from "src/utils/types";

export const GetFavourites = () => (dispatch:Dispatch) => {
    dispatch({
        type: GET_FAVOURITES_REQUEST
    })
    ApiMethod({func: 'get', url: '/product/api/v2/list_favorite_products/', auth: true})
        .then(success => {
            dispatch({
                type: GET_FAVOURITES_SUCCESS,
                payload: success as ProductType[]
            })
        })
        .catch(error => {
            dispatch({
                type: GET_FAVOURITES_FAIL,
                payload: error
            })
        });
}