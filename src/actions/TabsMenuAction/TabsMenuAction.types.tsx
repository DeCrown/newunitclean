export const TABS_MENU_SET_POS = 'TABS_MENU_SET_POS';
export const TABS_MENU_SET_HEIGHT = 'TABS_MENU_SET_HEIGHT';

interface TabsMenuSetPos {
  type: typeof TABS_MENU_SET_POS;
  payload: number;
}
interface TabsMenuSetHeight {
  type: typeof TABS_MENU_SET_HEIGHT;
  payload: {
    pos: number;
    height: number
  };
}

export type TabsMenuAction = TabsMenuSetPos | TabsMenuSetHeight;