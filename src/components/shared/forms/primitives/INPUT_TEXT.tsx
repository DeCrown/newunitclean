import React from 'react';
import styled, {keyframes} from "styled-components";

export const errorAnimation = keyframes`
  0% {
    box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.7);
  }
  100% {
    box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
  }
`;

const INPUT_TEXT_STYLE = styled.input<{css?: any}>`
  border: 1px solid rgba(0, 0, 0, 0.3);
  height: 47px;
  background: #FFFFFF;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  padding: 0 20px;
  width: calc(100% - 40px);
  ${props => props.css};
  
  &.active {
    border: 1px solid #2196F3;
    box-shadow: 0px 0px 0px 4px rgba(33, 150, 243, 0.24);
  }

  &.errorAnimation {
    border: 1px solid #D13631;
    box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
    animation: ${errorAnimation} 0.5s linear;
  }
  
  &.error {
    border: 1px solid #D13631;
    box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
  }
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`

interface INPUT_TEXT_STATE {
    value: string;
    error: boolean;
    active: boolean;
    errorAnimation: boolean
}

interface INPUT_TEXT_PROPS {
    css?: any;
    placeholder?: string;
    name?: string;
}

const INPUT_TEXT = (props: {inputState: INPUT_TEXT_STATE; inputProps: INPUT_TEXT_PROPS; onFocus: (active: boolean) => void; onInput: (event: any) => void; type: string}) => {

    function focus() {
        props.onFocus(true);
    }
    function blur() {
        props.onFocus(false);
    }

    return (
        <INPUT_TEXT_STYLE value={props.inputState.value}
                          type={props.type ? props.type : 'text'}
                          name={props.inputProps.name}
                          css={props.inputProps.css}
                          onChange={props.onInput}
                          onFocus={focus}
                          onBlur={blur}
                          placeholder={props.inputProps.placeholder}
                          className={[
                              (props.inputState.error ? 'error' : ''),
                              (props.inputState.errorAnimation ? 'errorAnimation' : ''),
                              (props.inputState.active ? 'active' : '')
                          ].join(' ')} />
    );
};

export default INPUT_TEXT;