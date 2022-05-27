import {BASE_URL} from "src/utils/constants";
import axios from "axios";
import {IStateApi} from "src/reducers/ApiMethodReducer/ApiMethodReducer.types";
import {getAuth} from "src/store/localStorage";
import {RefreshLoginUser} from "src/actions/AuthAction/AuthAction";
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {store} from "src/store/configureStore";

const config = (access_token: string) => {
    return {
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    }
}

const configDefault = {
    headers: {
        //'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
    }
}

const dataToUrl = (data: any) => {
    if (!data) {
        return '';
    }
    let pairs = Object.keys(data).map(key => key + '=' + data[key]);
    return pairs.length ? '?' + pairs.join('&') : '';
}

const funcs = {
    get: (url: string, data: any, access_token: string, auth?: boolean) =>
        axios.get(BASE_URL + url + dataToUrl(data), auth ? config(access_token) : configDefault),
    post: (url: string, data: any, access_token: string, auth?: boolean) =>
        axios.post(BASE_URL + url, data,auth ? config(access_token) : configDefault),
    patch: (url: string, data: any, access_token: string, auth?: boolean) =>
        axios.patch(BASE_URL + url, data,auth ? config(access_token) : configDefault),
    delete: (url: string, data: any, access_token: string, auth?: boolean) =>
        axios.delete(BASE_URL + url, {...(auth ? config(access_token) : configDefault), data: data}),
    put: (url: string, data: any, access_token: string, auth?: boolean) =>
        axios.put(BASE_URL + url, data,auth ? config(access_token) : configDefault),
}

export const ApiMethod = (data: IStateApi) => {
    const access_token = getAuth().access_token;

    funcs[data.func](data.url, data.data, access_token, data.auth)
        .then((response) => {
        if (response.status >= 200 && response.status < 300) {
            data.success(response.data)
        }})
        .catch((error) => {
            // если просрочена авторизация, вызываем рефреш и добавляем data обратно в очередь
            if (error.response.status == 401 && data.auth) {
                store.dispatch(RefreshLoginUser());
                AppendApiMethod(data)(store.dispatch);
            }
            data.error(error)
        });
};