import React from 'react';
import styled from "styled-components";

const HeaderTopButtonStyle = styled.div`
  cursor: pointer;
  display: grid;
  align-items: center;
  white-space: nowrap;
  padding: 0 5px;
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  
  &:hover {
    color: ${({ theme }) => theme.font.color.light_gray};
  }
`

const HeaderTopButton = (props: { children: any; href: string }) => {
    function open() {
        document.location = props.href;
    }

    return (
        <HeaderTopButtonStyle onClick={open}>{props.children}</HeaderTopButtonStyle>
    );
};

export default HeaderTopButton;