import React from 'react';
import styled from "styled-components";

export const DIV_BUTTON_BLUE_STYLE = styled.div<{css?: any; cssMobile?: any}>`
  display: grid;
  box-sizing: border-box;
  height: 60px;
  background: #2196F3;
  border: 2px solid #2196F3;
  border-radius: 10px;
  color: ${({ theme }) => theme.font.color.white};
  padding: 0px 20px;
  cursor: pointer;
  align-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${props => props.css}
  transition: filter 0.2s;
  
  .mobile & {
    ${props => props.cssMobile}
  }
  
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
  }
`;

export const DIV_BUTTON_WHITE_STYLE = styled(DIV_BUTTON_BLUE_STYLE)<{css?: any; cssMobile?: any}>`
  background: #FFFFFF;
  color: ${({ theme }) => theme.font.color.black};
  transition: background-color,color 0.3s,0.3s;
  ${props => props.css}
  
  &:hover {
    background: #2196F3;
    color: ${({ theme }) => theme.font.color.white};
  }

  .mobile & {
    ${props => props.cssMobile}
  }
`;