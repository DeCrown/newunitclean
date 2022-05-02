import React from 'react';
import styled from "styled-components";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const CategoryStyle = styled(DIV_BUTTON_WHITE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.font.color.black};
  white-space: break-spaces;
  background: none;
  border: 1px solid #0000;
  text-align: left;
  
  &:hover {
    background: none;
    color: ${({ theme }) => theme.font.color.black};
  }
`;

const CategorySelectedStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  white-space: break-spaces;
  text-align: left;
  box-shadow: 0px 12px 16px -8px rgba(209, 54, 49, 0.56);
`;

const Category = (props: {children: any; selected: number; self: number; func: (i: number) => void}) => {
    function click() {
        props.func(props.self);
    }

    if (props.selected == props.self) {
        return (<ButtonBlue func={click} styled={CategorySelectedStyle}>{props.children}</ButtonBlue>);
    }
    else {
        return (<ButtonBlue func={click} styled={CategoryStyle}>{props.children}</ButtonBlue>);
    }
}

export default Category;