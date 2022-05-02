import React, {useState} from 'react';
import styled from "styled-components";

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
  
  &.error {
    border: 1px solid #D13631;
    box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
  }
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`

const INPUT_TEXT = (props: {placeholder?: string; css?: any; onInput?: () => void; error?: boolean; type?: string}) => {
    const [active, setActive] = useState(false);

    function focus() {
        setActive(true);
    }
    function blur() {
        setActive(false);
    }

    return (
        <INPUT_TEXT_STYLE type={props.type ? props.type : 'text'}
                          css={props.css}
                          onInput={props.onInput ? props.onInput : undefined}
                          onFocus={focus}
                          onBlur={blur}
                          placeholder={props.placeholder}
                          className={(props.error ? 'error ' : '') + (active ? 'active' : '')} />
    );
};

export default INPUT_TEXT;