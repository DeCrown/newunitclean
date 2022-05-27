import {IStateReg} from './RegReducer.types';
import {GET_REG_FAIL, GET_REG_REQUEST, GET_REG_SUCCESS, RegUserAction} from "src/actions/RegAction/RegAction.types";

const initialStateReg = {
  isFetching: false,
  error: null,
};

export function RegReducer(state: IStateReg = initialStateReg, action: RegUserAction) {
  switch (action.type) {
    case GET_REG_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_REG_SUCCESS:
      return { ...state, isFetching: false, error: null };
    case GET_REG_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
