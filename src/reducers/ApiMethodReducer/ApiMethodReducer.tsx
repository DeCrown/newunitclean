import {IStateApiMethod} from './ApiMethodReducer.types';
import {ApiMethodAction, APPEND_API_METHOD, CLEAR_API_METHOD} from "src/actions/ApiMethodAction/ApiMethodAction.types";
import {ClearApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {store} from "src/store/configureStore";
import {ApiMethod} from "api/APIMethod";
import {getAuth} from "src/store/localStorage";
import {IStateAuth} from "src/reducers/AuthReducer/AuthReducer.types";

const initialStateApiMethod = {
  access: false,
  queue: []
};

export const ApiMethodHandler = () => {
  const state = store.getState();
  const {isFetching} = state.Auth as IStateAuth;
  const {isAuthorized} = getAuth();
  const {queue} = state.ApiMethod as IStateApiMethod;

  if (isAuthorized && !isFetching && queue.length) {
    queue.map((api) => {
      ApiMethod(api);
    });
    ClearApiMethod()(store.dispatch);
  }
}

export function ApiMethodReducer(state: IStateApiMethod = initialStateApiMethod, action: ApiMethodAction) {
  switch (action.type) {
    case APPEND_API_METHOD:
      let queue = state.queue;
      queue.push(action.payload);
      return {
        ...state,
        queue: queue
      };
    case CLEAR_API_METHOD:
      return {
        ...state,
        queue: []
      };
    default:
      return state;
  }
}
