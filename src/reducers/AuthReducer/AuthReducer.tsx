import {IStateAuth} from './AuthReducer.types';
import {
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS, GET_FAIL, GET_LOGOUT_AUTH,
  LoginUserAction
} from "../../actions/AuthAction/AuthAction.types";
import {getAuth} from "src/store/localStorage";

const initialStateAuth = {
  access_token: "",
  refresh_token: "",
  isFetching: false,
  isAuthorized: false,
  error: null,
};


export function AuthReducer(state: IStateAuth = getAuth(), action: LoginUserAction) {
  switch (action.type) {
    case GET_AUTH_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_AUTH_SUCCESS:
      return { ...state,
        access_token: action.payload.access,
        refresh_token: action.payload.refresh ? action.payload.refresh : state.refresh_token,
        isAuthorized: true, isFetching: false, error: null };
    case GET_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    case GET_LOGOUT_AUTH:
      return { ...state, access_token: null, refresh_token: null, isFetching: false, isAuthorized: false };
    default:
      return state;
  }
}
