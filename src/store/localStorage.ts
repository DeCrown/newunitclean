import {IStateAuth} from "src/reducers/AuthReducer/AuthReducer.types";
import {store} from "src/store/configureStore";

export const saveAuth = () => {
    const state = store.getState();
    const data = state.Auth as IStateAuth;
    localStorage.setItem('access_token', data.access_token ? data.access_token : '');
    localStorage.setItem('refresh_token', data.refresh_token ? data.refresh_token : '');
    localStorage.setItem('isAuthorized', data.isAuthorized ? '1' : '');
    localStorage.setItem('error', data.error ? data.error : '');
}

export const getAuth = () => {
    let access_token = localStorage.getItem('access_token');
    let refresh_token = localStorage.getItem('refresh_token');
    let isFetching = false;
    let isAuthorized = localStorage.getItem('isAuthorized');
    let error = localStorage.getItem('error');
    return {
        access_token: access_token ? access_token : '',
        refresh_token: refresh_token ? refresh_token : '',
        isFetching: isFetching,
        isAuthorized: Boolean(isAuthorized),
        error: error
    } as IStateAuth
}