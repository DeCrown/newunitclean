export const SWITCH_MOBILE_MENU = 'SWITCH_MOBILE_MENU';
export const OPEN_MOBILE_MENU = 'OPEN_MOBILE_MENU';
export const CLOSE_MOBILE_MENU = 'CLOSE_MOBILE_MENU';

interface SwitchMobileMenu {
  type: typeof SWITCH_MOBILE_MENU;
}

interface OpenMobileMenu {
  type: typeof OPEN_MOBILE_MENU;
}

interface CloseMobileMenu {
  type: typeof CLOSE_MOBILE_MENU;
}

export type MobileMenuAction = SwitchMobileMenu | OpenMobileMenu | CloseMobileMenu;