export const GET_REG_REQUEST = 'GET_REG_REQUEST';
export const GET_REG_SUCCESS = 'GET_REG_SUCCESS';
export const GET_REG_FAIL = 'GET_REG_FAIL';

interface RequestRegUserAction {
  type: typeof GET_REG_REQUEST;
}

interface SuccessRegUserAction {
  type: typeof GET_REG_SUCCESS;
}

interface FailRegUserAction {
  type: typeof GET_REG_FAIL;
  payload: null | Error;
}

export type RegUserAction =
  | RequestRegUserAction
  | SuccessRegUserAction
  | FailRegUserAction