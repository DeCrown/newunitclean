import {IStateWindows} from './WindowsManagerReducer.types';
import {
    CLEAR_WINDOWS,
    SET_WINDOW,
    WindowAction
} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";

const initialStateWindows = {
    window: null
};

export function WindowsManagerReducer(state = initialStateWindows, action: WindowAction) : IStateWindows {
    switch (action.type) {
        case SET_WINDOW:
            return { ...state,
                window: action.payload.window, url: action.payload.url};
        case CLEAR_WINDOWS:
            return { ...state, window: null, url: undefined };
        default:
            return state;
    }
}