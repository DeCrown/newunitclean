import React from 'react';
import styled from "styled-components";
import {headerMenuBottomButton} from "src/utils/types";

const HeaderBottomMenuButtonIcon = styled.div`
  & img {
    height: 24px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: filter 0.5s;
  }
  &:hover img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  }
`

const HeaderBottomMenuButtonStyle = styled.a`
  display: grid;
  align-content: center;
  padding: 0 5px;
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  cursor: pointer;

  &, &:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.font.color.black};
    font-size: ${({ theme }) => theme.font.size[13]};
    font-weight: ${({ theme }) => theme.font.weight[700]};
  }
`

const HeaderBottomMenuButton = (props: { data: headerMenuBottomButton } ) => {
    return (
        <HeaderBottomMenuButtonStyle href={props.data.href} onClick={props.data.func}>
            <HeaderBottomMenuButtonIcon>
                <img src={props.data.icon} />
            </HeaderBottomMenuButtonIcon>
            <div>{props.data.text}</div>
        </HeaderBottomMenuButtonStyle>
    );
};

export default HeaderBottomMenuButton;