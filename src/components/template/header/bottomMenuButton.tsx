import React from 'react';
import styled from "styled-components";

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

const HeaderBottomMenuButtonStyle = styled.div`
  display: grid;
  align-content: center;
  padding: 0 5px;
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  cursor: pointer;
`

const HeaderBottomMenuButton = (props: { children: any; href: string; icon: any } ) => {
    function open() {
        document.location = props.href;
    }

    return (
        <HeaderBottomMenuButtonStyle onClick={open}>
            <HeaderBottomMenuButtonIcon>
                <img src={props.icon} />
            </HeaderBottomMenuButtonIcon>
            <div>{props.children}</div>
        </HeaderBottomMenuButtonStyle>
    );
};

export default HeaderBottomMenuButton;