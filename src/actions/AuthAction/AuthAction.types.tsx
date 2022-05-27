export const GET_LOGOUT_AUTH = 'GET_LOGOUT_AUTH_SUCCESS';
export const GET_AUTH_REQUEST = 'GET_AUTH_REQUEST';
export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

interface RequestLoginUserAction {
  type: typeof GET_AUTH_REQUEST;
}

interface SuccessLoginUserAction {
  type: typeof GET_AUTH_SUCCESS;
  payload: {
    access: string,
    refresh: string
  };
}

interface FailUserAction {
  type: typeof GET_FAIL;
  payload: null | Error;
}


interface LogoutUserAction {
  type: typeof GET_LOGOUT_AUTH;
  payload: object;
}

export type LoginUserAction =
  | RequestLoginUserAction
  | SuccessLoginUserAction
  | LogoutUserAction
  | FailUserAction