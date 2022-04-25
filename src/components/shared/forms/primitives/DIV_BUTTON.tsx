import React from 'react';
import styled, {css} from "styled-components";

const DIV_BUTTON_STYLE = styled.div<{css?: any}>`
    display: grid;
    height: 60px;
    background: #2196F3;
    border-radius: 10px;
    color: #fff;
    padding: 0px 20px;
    cursor: pointer;
    align-content: center;
  ${props => props.css}
`

const DIV_BUTTON = (props:{children: any, style?: any, func?: void}) => {
    return (
        <DIV_BUTTON_STYLE css={props.style} onClick={ props.func ? props.func : undefined }>
            {props.children}
        </DIV_BUTTON_STYLE>
    );
};

export default DIV_BUTTON;