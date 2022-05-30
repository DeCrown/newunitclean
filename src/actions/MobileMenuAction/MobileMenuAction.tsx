import {Dispatch} from "redux";
import {
    CLOSE_MOBILE_MENU,
    OPEN_MOBILE_MENU,
    SWITCH_MOBILE_MENU
} from "src/actions/MobileMenuAction/MobileMenuAction.types";

export const SwitchMobileMenu = () => (dispatch: Dispatch) => {
    dispatch({
        type: SWITCH_MOBILE_MENU,
    })
}

export const OpenMobileMenu = () => (dispatch: Dispatch) => {
    dispatch({
        type: OPEN_MOBILE_MENU,
    })
}

export const CloseMobileMenu = () => (dispatch: Dispatch) => {
    dispatch({
        type: CLOSE_MOBILE_MENU
    })
}