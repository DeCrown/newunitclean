import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {
    GET_FAVOURITES_FAIL,
    GET_FAVOURITES_REQUEST,
    GET_FAVOURITES_SUCCESS
} from "src/actions/FavouritesAction/FavouritesAction.types";
import {ProductType} from "src/utils/types";

export const GetFavourites = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_FAVOURITES_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/list_favorite_products/',
        success: (success) => {
            dispatch({
                type: GET_FAVOURITES_SUCCESS,
                payload: success as ProductType[]
            })
        },
        error: (error) => {
            dispatch({
                type: GET_FAVOURITES_FAIL,
                payload: error
            })
        }, auth: true})(dispatch);
}