import { createStore, applyMiddleware  } from 'redux';
import {rootReducer, RootState} from 'src/reducers';
//import logger from 'redux-logger'
import thunk from 'redux-thunk';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {saveAuth} from "src/store/localStorage";

export const store = createStore(rootReducer, applyMiddleware(thunk)) //logger) )
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

store.subscribe(saveAuth);