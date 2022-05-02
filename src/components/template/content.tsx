import React from 'react';
import styled from "styled-components";
import Windows from "components/shared/windows";

const ContentStyle = styled.div`
  padding: 30px ${({ theme }) => theme.values.contentMargin}px;

  .mobile & {
    padding: 0 ${({ theme }) => theme.values.contentMobileMargin}px;
  }
`;

const Content = (props: {children: any}) => {
    return (
        <ContentStyle>
            <Windows></Windows>
            {props.children}
        </ContentStyle>
    )
}

export default Content;