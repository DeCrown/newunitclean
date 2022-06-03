import React from 'react';
import styled from "styled-components";

const ContentStyle = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  color: ${({ theme }) => theme.font.color.black};
  
  margin: 40px 0;
`;

const Content = (props: {children: any}) => {
    return (
        <ContentStyle>
            {props.children}
        </ContentStyle>
    );
};

export default Content;