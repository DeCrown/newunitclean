import React from 'react';
import _INPUT_TEXT from "../primitives/INPUT_TEXT";

const InputText = (props: {placeholder?: string}) => {
    return (
        <div>
            <_INPUT_TEXT placeholder={props.placeholder}></_INPUT_TEXT>
        </div>
    );
};

export default InputText;