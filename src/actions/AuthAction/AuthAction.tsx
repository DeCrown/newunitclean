import axios from 'axios';
import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/reducers/index'
import {
    GET_AUTH_REQUEST,
    GET_AUTH_SUCCESS,
    GET_FAIL, GET_LOGOUT_AUTH
} from "./AuthAction.types";
import {BASE_URL, URLs} from "src/utils/constants";
import {getAuth} from "src/store/localStorage";
import {routes} from "src/utils/routes";


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


export const LoginUser = (data: { username: string, password: string }) => (dispatch:Dispatch) =>
    new Promise((resolve, reject) => {
        dispatch({
            type: GET_AUTH_REQUEST
        })

        axios.post(BASE_URL + '/api/token/', data, config)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: GET_AUTH_SUCCESS,
                        payload: response.data
                    })
                    return resolve(response)
                }
                else {
                    return reject(response)
                }
            })
            .catch(error => {
                dispatch({
                    type: GET_FAIL,
                    payload: error
                })
                return reject(error)
            });
    });

export const RefreshLoginUser = () => (dispatch:Dispatch) =>
    new Promise((resolve, reject) => {
        dispatch({
            type: GET_AUTH_REQUEST
        })

        const Auth = getAuth();
        axios.post(BASE_URL + '/api/token/refresh/', {refresh: Auth.refresh_token}, config)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: GET_AUTH_SUCCESS,
                        payload: response.data
                    })
                    return resolve(response)
                }
                else {
                    return reject(response)
                }
            })
            .catch(error => {
                dispatch({
                    type: GET_FAIL,
                    payload: error
                })
                LogoutUser(dispatch)
                return reject(error)
            });
    });

export const LogoutUser = (dispatch:Dispatch) => {
    dispatch({
        type: GET_LOGOUT_AUTH
    })

    let addr = window.location.pathname.match(/\/[^\/]+/) as Array<string>;

    if (addr && addr[0]) {
        let route = routes.find(r => r.url == addr[0]);

        if (route && route.auth) {
            window.open(URLs.ROOT, '_self');
        }
    }
}