import React from 'react';
import styled from "styled-components";
import {headerMenuTopButton} from "src/utils/types";

const HeaderTopButtonStyle = styled.a`
  cursor: pointer;
  display: grid;
  align-items: center;
  white-space: nowrap;
  padding: 0 5px;
  
  &, &:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.font.color.white};
    font-size: ${({theme}) => theme.font.size[13]};
    font-weight: ${({theme}) => theme.font.weight[400]};
  }
  
  &:hover {
    color: ${({ theme }) => theme.font.color.light_gray};
  }
`

const HeaderTopButton = (props: { data: headerMenuTopButton }) => {
    return (
        <HeaderTopButtonStyle href={props.data.href} onClick={props.data.func}>{props.data.text}</HeaderTopButtonStyle>
    );
};

export default HeaderTopButton;