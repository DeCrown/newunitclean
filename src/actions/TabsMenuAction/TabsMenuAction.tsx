import {CLEAR_WINDOWS, SET_WINDOW} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {Dispatch} from "redux";
import {TABS_MENU_SET_POS} from "src/actions/TabsMenuAction/TabsMenuAction.types";

export const TabsMenuSetPos = (pos: number) => (dispatch: Dispatch) => {
    dispatch({
        type: TABS_MENU_SET_POS,
        payload: pos
    })
}