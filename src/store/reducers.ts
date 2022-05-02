import {combineReducers} from "redux";

import {Reducer as tabsMenu, state as tabMenuState} from "components/shared/tabsMenu/reducer";
import {Reducer as windows, state as windowsState} from "components/shared/windows/reducer";

export const Reducers = combineReducers( {
    tabsMenu: tabsMenu,
    windows: windows
});

export interface ReducersState {
    tabsMenu: tabMenuState;
    windows: windowsState;
}