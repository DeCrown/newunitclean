import React from 'react';
import styled from "styled-components";
import {headerMenuTopButton} from "src/utils/types";
import HeaderButton from "components/template/header/headerButton";

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

const TopButton = (props: { data: headerMenuTopButton }) => {
    return (
        <HeaderButton styled={HeaderTopButtonStyle} href={props.data.href} func={props.data.func} auth={props.data.auth}>
            {props.data.text}
        </HeaderButton>
    );
};

export default TopButton;