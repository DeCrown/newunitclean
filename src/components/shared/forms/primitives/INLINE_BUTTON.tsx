import React from 'react';

const INLINE_BUTTON = (props: {placeholder: string}) => {
    return (
        <input type='text' placeholder={props.placeholder} />
    );
};

export default INLINE_BUTTON;