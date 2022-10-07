import {BASE_URL} from "src/utils/constants";
import axios from "axios";
import {ApiMethodType} from "src/utils/types";
import {getAuth} from "src/store/localStorage";
import {RefreshLoginUser} from "src/actions/AuthAction/AuthAction";
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

const funcs = {
    get: (url: string, data: any, access_token: string, auth?: boolean) =>
        axios.get(BASE_URL + url, {...(auth ? config(access_token) : configDefault), params: data}),
    post: (url: string, data: any, access_token: string, auth?: boolean) =>
        axios.post(BASE_URL + url, data,auth ? config(access_token) : configDefault),
    patch: (url: string, data: any, access_token: string, auth?: boolean) =>
        axios.patch(BASE_URL + url, data,auth ? config(access_token) : configDefault),
    delete: (url: string, data: any, access_token: string, auth?: boolean) =>
        axios.delete(BASE_URL + url, {...(auth ? config(access_token) : configDefault), data: data}),
    put: (url: string, data: any, access_token: string, auth?: boolean) =>
        axios.put(BASE_URL + url, data,auth ? config(access_token) : configDefault),
}

const ApiMethodRequest = (data: ApiMethodType) =>
    new Promise((resolve, reject) => {
        const access_token = getAuth().access_token;

        funcs[data.func](data.url, data.data, access_token, data.auth)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.data)
                }
                else {
                    return reject(response)
                }
            })
            .catch(error => reject(error));
    });

export const ApiMethod = (data: ApiMethodType) =>
    new Promise((resolve, reject) => {
        if (data.auth) {
            RefreshLoginUser()(store.dispatch)
                .then(result => ApiMethodRequest(data).then(result => resolve(result)).catch(error => reject(error)))
                .catch(error => reject(error))
        }
        else {
            ApiMethodRequest(data).then(result => resolve(result)).catch(error => reject(error))
        }
    });