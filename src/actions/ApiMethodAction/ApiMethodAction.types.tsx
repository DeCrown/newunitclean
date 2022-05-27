import {IStateApi} from "src/reducers/ApiMethodReducer/ApiMethodReducer.types";

export const CLEAR_API_METHOD = 'CLEAR_API_METHOD';
export const APPEND_API_METHOD = 'APPEND_API_METHOD';

interface ClearApiMethodAction {
  type: typeof CLEAR_API_METHOD;
}

interface AppendApiMethodAction {
  type: typeof APPEND_API_METHOD;
  payload: IStateApi;
}

export type ApiMethodAction = ClearApiMethodAction | AppendApiMethodAction;