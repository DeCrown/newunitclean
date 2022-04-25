import {combineReducers} from "redux";

import {Reducer as tabsMenu} from "components/shared/tabsMenu/reducer";

export const Reducers = combineReducers( {
    tabsMenu: tabsMenu
});