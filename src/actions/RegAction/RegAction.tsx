import axios from 'axios';
import { Dispatch } from 'redux'
import {
    GET_REG_FAIL, GET_REG_REQUEST, GET_REG_SUCCESS
} from "./RegAction.types";
import {BASE_URL} from "src/utils/constants";

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

export interface RegPropsData {
    username: string,
    email: string,
    full_name: string,
    phone_number: string,
    address: string,
    password: string,
    password2: string
}

interface RegProps {
    data: RegPropsData;
    successFunc?: () => void;
    errorFunc?: (error: any) => void
}

export const RegUser = (props: RegProps ) => (dispatch:Dispatch) => {
    dispatch({
        type: GET_REG_REQUEST
    })
    return axios.post(BASE_URL + '/employee/api/v2/register/', props.data, config)
        .then((response) => {
            if (response.status === 201) {
                dispatch({
                    type: GET_REG_SUCCESS
                })
                if (props.successFunc) {
                    props.successFunc()
                }
            }})
        .catch((error)=> {
            dispatch({
                type: GET_REG_FAIL,
                payload: error
            })
            if (props.errorFunc) {
                props.errorFunc(error)
            }
        });
}