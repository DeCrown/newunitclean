import React from 'react';
import {StyledComponent} from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const RadioButtonBlue = (props:{children: any, styled?: StyledComponent<any, any>, func?: () => void }) => {
    const Styled = props.styled ? props.styled : DIV_BUTTON_BLUE_STYLE;

    return (
        <Styled onClick={ props.func ? props.func : undefined }>
            { props.children }
        </Styled>
    );
};

export default RadioButtonBlue;