import React from 'react';
import {
    WINDOW_AUTHORIZATION,
    WINDOW_REGISTRATION,
    WINDOW_SEARCH, WINDOW_TESTING
} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {Authorization} from "components/shared/windows/authorization";
import {Registration} from "components/shared/windows/registration";
import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";
import {useTypedSelector} from "src/store/configureStore";
import EmptyBackground from "components/shared/windows/empty_background";
import Testing from "components/shared/windows/testing";
import {isMobile} from "src/utils/isMobile";
import MobileSearch from "components/template/header/mobileSearch";

const Windows = () => {
    const WindowsManager = useTypedSelector((store) => store.WindowsManager);
    const {window} = WindowsManager as IStateWindows;

    if (window == WINDOW_AUTHORIZATION) {
        return <Authorization></Authorization>;
    }
    else if (window == WINDOW_REGISTRATION) {
        return <Registration></Registration>;
    }
    else if (window == WINDOW_TESTING) {
        return <Testing></Testing>;
    }
    else if (window == WINDOW_SEARCH) {
        if (isMobile()) {
            return <div>
                <EmptyBackground></EmptyBackground>
                <MobileSearch></MobileSearch>
            </div>
        }
        return <EmptyBackground></EmptyBackground>
    }
    else {
        return <div></div>
    }
};

export default Windows;