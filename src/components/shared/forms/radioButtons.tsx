import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {ProductSizeType} from "src/utils/types";
import RadioButtonBlue from "components/shared/forms/radioButton";

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

const RadioButton = (props: {id: number; title: string; pos: number; func: (i: number) => void;}) => {
    function click() {
        props.func(props.id);
    }

    return (
        props.pos == props.id ?
            <RadioButtonBlue styled={ButtonSelected} func={click}>{props.title}</RadioButtonBlue>
            :
            <RadioButtonBlue styled={ButtonUnSelected} func={click}>{props.title}</RadioButtonBlue>
    );
}

const RadioButtonsStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 12px; gap: 12px;
  justify-content: start;

  margin: -${({ theme }) => theme.values.contentMobileMargin}px;
  padding: ${({ theme }) => theme.values.contentMobileMargin}px;
  overflow-x: auto;
`;

const RadioButtons = (props: {buttons: ProductSizeType[]; setSize: (id: number) => void}) => {
    const [pos, setPos] = useState(props.buttons[0].id);

    const select = (i: number) => {
        setPos(i);
        props.setSize(i);
    }

    useEffect(() => {
        props.setSize(pos);
    }, [])

    return (
        <RadioButtonsStyle>
            {props.buttons.map((button, i) => <RadioButton id={button.id} title={button.title} pos={pos} key={i} func={select}/>)}
        </RadioButtonsStyle>
    );
};

export default RadioButtons;