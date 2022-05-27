import React, {useCallback} from 'react';
import {StyledComponent} from "styled-components";
import {IStateAuth} from "src/reducers/AuthReducer/AuthReducer.types";
import {useDispatch} from "react-redux";
import {WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_AUTHORIZATION} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {useTypedSelector} from "src/store/configureStore";

const HeaderButton = (props: {styled: StyledComponent<any, any>; href?: string; children: any; func?: () => void; auth?: boolean}) => {

    const Auth = useTypedSelector((store) => store.Auth);
    const {isAuthorized} = Auth as IStateAuth;

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    if (isAuthorized || !props.auth) {
        return (<props.styled href={props.href} onClick={props.func}>
            {props.children}
        </props.styled>)
    }
    else {
        return (<props.styled onClick={() => stableDispatch(WindowsManagerOpen(WINDOW_AUTHORIZATION, props.href))}>
            {props.children}
        </props.styled>)
    }
};

export default HeaderButton;