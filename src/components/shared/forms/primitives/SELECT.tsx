import React from 'react';
import styled from "styled-components";
import {selectOption} from "src/utils/types";
import {errorAnimation} from "components/shared/forms/primitives/INPUT_TEXT";

const SELECT_STYLE = styled.select<{css?: any}>`
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
  width: 100%;
  //width: calc(100% - 40px);
  box-sizing: border-box;
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

/*const OPTGROUP = styled.optgroup`
  font-family: 'Montserrat';
  font-style: normal;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
`;*/

interface SELECT_STATE {
    value: string | undefined;
    error: boolean;
    active: boolean;
    errorAnimation: boolean;
}

interface SELECT_PROPS {
    css?: any;
    defaultOption?: selectOption;
    options: selectOption[];
}

const SELECT = (props: {selectProps: SELECT_PROPS; selectState: SELECT_STATE; onFocus: (active: boolean) => void; onInput: () => void}) => {

    function focus() {
        props.onFocus(true);
    }
    function blur() {
        props.onFocus(false);
    }

    return (
        <SELECT_STYLE value={props.selectState.value}
                      onFocus={focus}
                      onBlur={blur}
                      css={props.selectProps.css}
                      onChange={props.onInput}
                      className={[
                          (props.selectState.error ? 'error' : ''),
                          (props.selectState.errorAnimation ? 'errorAnimation' : ''),
                          (props.selectState.active ? 'active' : '')
                      ].join(' ')}>
            <option value={props.selectProps.defaultOption?.value}>{props.selectProps.defaultOption?.text}</option>
            {
                props.selectProps.options.map((option, i) =>
                    <option key={i} value={option.value} className={'option'}>{option.text}</option>)
            }
        </SELECT_STYLE>
    );
};

export default SELECT;