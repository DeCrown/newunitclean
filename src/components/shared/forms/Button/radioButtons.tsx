import React, {useState} from 'react';
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const ButtonSelected = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  width: min-content;
`;

const ButtonUnSelected = styled(DIV_BUTTON_WHITE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  border-color: #000000;
  width: min-content;

  &:hover {
    color: ${({ theme }) => theme.font.color.black};
    background: #2196F361;
  }
`;

const RadioButton = (props: {children: any; pos: number; func: (i: number) => void; self: number}) => {
    function click() {
        props.func(props.self);
    }

    return (
        props.pos == props.self ?
            <ButtonBlue styled={ButtonSelected} func={click}>{props.children}</ButtonBlue>
            :
            <ButtonBlue styled={ButtonUnSelected} func={click}>{props.children}</ButtonBlue>
    );
}

const RadioButtonsStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 12px;
  justify-content: start;

  margin: 0px -${({ theme }) => theme.values.contentMobileMargin}px;
  padding: 0px ${({ theme }) => theme.values.contentMobileMargin}px;
  overflow-x: auto;
`;

const RadioButtons = (props: {buttons: string[]}) => {
    const [pos, setPos] = useState(0);

    const select = (i: number) => {
        setPos(i);
    }

    return (
        <RadioButtonsStyle>
            {props.buttons.map((button, i) => <RadioButton pos={pos} key={i} func={select} self={i}>{button}</RadioButton>)}
        </RadioButtonsStyle>
    );
};

export default RadioButtons;