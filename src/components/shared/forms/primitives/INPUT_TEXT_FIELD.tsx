import React from 'react';
import styled from "styled-components";

const INPUT_TEXT_FIELD_STYLE = styled.textarea`
  border: 1px solid rgba(0, 0, 0, 0.3);
  resize: none;
  background: #FFFFFF;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  padding: 12px 20px;
  margin: 0;
  width: calc(100% - 40px);
`

interface INPUT_TEXT_FIELD_STATE {
    value: string;
    error: boolean;
    active: boolean;
}

interface INPUT_TEXT_FIELD_PROPS {
    placeholder?: string;
}

const INPUT_TEXT_FIELD = (props: {inputFieldState: INPUT_TEXT_FIELD_STATE; inputFieldProps: INPUT_TEXT_FIELD_PROPS; onFocus: (active: boolean) => void; onInput: (event: any) => void}) => {

    function focus() {
        props.onFocus(true);
    }
    function blur() {
        props.onFocus(false);
    }

    return (
        <INPUT_TEXT_FIELD_STYLE value={props.inputFieldState.value}
                          onChange={props.onInput}
                          onFocus={focus}
                          onBlur={blur}
                          placeholder={props.inputFieldProps.placeholder}
                          className={(props.inputFieldState.error ? 'error ' : '') + (props.inputFieldState.active ? 'active' : '')} />
    );
};

export default INPUT_TEXT_FIELD;