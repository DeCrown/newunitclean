import {IStateTabsMenu} from "src/reducers/TabsMenuReducer/TabsMenuReducer.types";
import {TABS_MENU_SET_HEIGHT, TABS_MENU_SET_POS, TabsMenuAction} from "src/actions/TabsMenuAction/TabsMenuAction.types";

const initialStateTabsMenu = {
    pos: 0,
    heights: 'auto'
};

export function TabsMenuReducer(state = initialStateTabsMenu, action: TabsMenuAction) : IStateTabsMenu {
    switch (action.type) {
        case TABS_MENU_SET_POS:
            return {...state, pos: action.payload}
        case TABS_MENU_SET_HEIGHT:
            return {...state, heights: {...state, [action.payload.pos]: action.payload.height}}
        default:
            return state;
    }
}