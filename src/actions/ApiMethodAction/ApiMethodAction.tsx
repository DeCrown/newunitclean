import { Dispatch} from 'redux'
import {
    APPEND_API_METHOD,
    CLEAR_API_METHOD
} from "src/actions/ApiMethodAction/ApiMethodAction.types";
import {IStateApi} from "src/reducers/ApiMethodReducer/ApiMethodReducer.types";
import {ApiMethod} from "api/APIMethod";

export const ClearApiMethod = () => (dispatch:Dispatch) => {
    dispatch({
        type: CLEAR_API_METHOD
    })
}

export const AppendApiMethod = (api: IStateApi) => (dispatch:Dispatch) => {
    if (api.auth) {
        dispatch({
            type: APPEND_API_METHOD,
            payload: api
        })
    }
    else {
        ApiMethod(api);
    }
}