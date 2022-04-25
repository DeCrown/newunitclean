import React from 'react';
import _INPUT_TEXT_FIELD from "../primitives/INPUT_TEXT_FIELD";

const InputTextField = (props: {placeholder?: string}) => {
    return (
        <div>
            <_INPUT_TEXT_FIELD placeholder={props.placeholder}></_INPUT_TEXT_FIELD>
        </div>
    );
};

export default InputTextField;