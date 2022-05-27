import {CLEAR_WINDOWS, SET_WINDOW} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {Dispatch} from "redux";

export const WindowsManagerOpen = (prop: string, url?: string) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_WINDOW,
        payload: {
            window: prop,
            url: url
        }
    })
    /*return ({
        type: SET_WINDOW,
        payload: prop
    })*/
}

export const WindowsManagerClear = () => (dispatch: Dispatch) => {
    dispatch({
        type: CLEAR_WINDOWS
    })
}