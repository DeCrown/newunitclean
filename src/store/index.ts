import {createStore} from 'redux';
import {Reducers} from "./reducers";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const store = createStore(Reducers);

export const useTypedSelector: TypedUseSelectorHook<{ tabsMenu: { pos: number; heights: {} } } > = useSelector