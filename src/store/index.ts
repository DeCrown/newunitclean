import {createStore} from 'redux';
import {Reducers, ReducersState} from "./reducers";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const store = createStore(Reducers);

export const useTypedSelector: TypedUseSelectorHook<ReducersState> = useSelector