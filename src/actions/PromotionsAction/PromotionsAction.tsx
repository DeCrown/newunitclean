import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {PromotionType} from "src/utils/types";
import {
    GET_PROMOTIONS_FAIL,
    GET_PROMOTIONS_REQUEST,
    GET_PROMOTIONS_SUCCESS
} from "src/actions/PromotionsAction/PromotionsAction.types";

export const GetPromotions = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_PROMOTIONS_REQUEST
    })
    AppendApiMethod({func: 'get', url: '/product/api/v2/list_promo_codes/',
        success: (success) => {
            dispatch({
                type: GET_PROMOTIONS_SUCCESS,
                payload: success as PromotionType[]
            })
        },
        error: (error) => {
            dispatch({
                type: GET_PROMOTIONS_FAIL,
                payload: error
            })
        }})(dispatch);
}