import React from 'react';
import styles from './fonts.module.css';
import styled from "styled-components";

export const Fonts = {
    w300: 'textW300',
    w400: 'textW400',
    w500: 'textW500',
    w600: 'textW600',
    w700: 'textW700',
    w800: 'textW800',
    w900: 'textW900',

    s12: 'textS12',
    s13: 'textS13',
    s16: 'textS16',
    s18: 'textS18',
    s20: 'textS20',
    s36: 'textS36',

    white: 'textCwhite',
    black: 'textCblack',
    gray: 'textCgray',
    light_gray: 'textCligth_gray',
    red: 'textCred',
    blue: 'textCblue',

    XS: 'textXS',
    S: 'textS',
    M: 'textM',
    MB: 'textMB',
    LB: 'textLB'
};

/*const T = styled.span<{ weight: string; size: string; color: string }>`
    font-weight: ${props => props.weight ? '' : ''};
`;*/

export const Text = (props: {children: any, style?: string[]}) => {
    return (
        <span className={props.style ? props.style.map((style) => styles[style]).join(' ') : ''}>{props.children}</span>
    );
};

export const Style = (stylesList: string[]) => {
    return stylesList.map((style) => styles[style]).join(' ');
};