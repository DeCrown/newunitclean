import {store} from "src/store/configureStore";
import {WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_SEARCH} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {CloseMobileMenu} from "src/actions/MobileMenuAction/MobileMenuAction";

export const showFeedback = () => {
    const titleElement = document.getElementById('feedback');
    if (titleElement) {
        titleElement.scrollIntoView({behavior: 'smooth'});
    }
}

export const openSearch = () => {
    WindowsManagerOpen(WINDOW_SEARCH)(store.dispatch);
    CloseMobileMenu()(store.dispatch);
}