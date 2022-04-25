import React from 'react';
import DIV_BUTTON from "../primitives/DIV_BUTTON";

const ButtonBlue = (props:{children: any, css?: any, func?: void }) => {
    return (
        <DIV_BUTTON style={props.css} func={props.func}>
            { props.children }
        </DIV_BUTTON>
    );
};

export default ButtonBlue;