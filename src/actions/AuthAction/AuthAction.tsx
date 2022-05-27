import axios from 'axios';
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {
    GET_AUTH_REQUEST,
    GET_AUTH_SUCCESS,
    GET_FAIL, GET_LOGOUT_AUTH
} from "./AuthAction.types";
import {BASE_URL} from "src/utils/constants";
import {store} from "src/store/configureStore";
import {IStateAuth} from "src/reducers/AuthReducer/AuthReducer.types";
import {getAuth} from "src/store/localStorage";


//включаем защиту токенами от csrf атак
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const config = {
  headers: {
    //'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  }
}


export const LoginUser = (props: { data: {username: string; password: string}; successFunc?: () => void; errorFunc?: () => void } ) : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
      type: GET_AUTH_REQUEST
    })
    return axios.post(BASE_URL + '/api/token/', props.data, config)
    .then((response) => {
          if (response.status === 200) {
              dispatch({
                type: GET_AUTH_SUCCESS,
                payload: response.data
              })
              if (props.successFunc) {
                  props.successFunc()
              }
          }})
      .catch((error)=> {
          dispatch({
              type: GET_FAIL,
              payload: error
          })
          if (props.errorFunc) {
              props.errorFunc()
          }
      });
}

export const RefreshLoginUser = () : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_AUTH_REQUEST
    })
    const Auth = getAuth();
    return axios.post(BASE_URL + '/api/token/refresh/', {refresh: Auth.refresh_token}, config)
        .then((response) => {
            if (response.status === 200) {
                dispatch({
                    type: GET_AUTH_SUCCESS,
                    payload: response.data
                })
            }})
        .catch((error)=> {
                dispatch({
                    type: GET_FAIL,
                    payload: error
                })
                dispatch(LogoutUser())
            }
        );
}

export const LogoutUser = (props: {successFunc?: () => void} = {}) : ThunkAction<void,RootState,unknown,Action<string> > => async dispatch => {
    dispatch({
        type: GET_LOGOUT_AUTH
    })
    if (props.successFunc) {
        props.successFunc()
    }
}