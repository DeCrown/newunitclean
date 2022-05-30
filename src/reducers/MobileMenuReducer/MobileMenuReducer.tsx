import {IStateMobileMenu} from './MobileMenuReducer.types';
import {
    CLOSE_MOBILE_MENU,
    MobileMenuAction,
    OPEN_MOBILE_MENU,
    SWITCH_MOBILE_MENU
} from "src/actions/MobileMenuAction/MobileMenuAction.types";

const initialStateMobileMenu = {
    opened: false
};

export function MobileMenuReducer(state = initialStateMobileMenu, action: MobileMenuAction) : IStateMobileMenu {
    switch (action.type) {
        case SWITCH_MOBILE_MENU:
            return { ...state, opened: !state.opened};
        case OPEN_MOBILE_MENU:
            return { ...state, opened: true};
        case CLOSE_MOBILE_MENU:
            return { ...state, opened: false};
        default:
            return state;
    }
}