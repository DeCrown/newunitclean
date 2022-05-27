import React from 'react';
import styled from "styled-components";

export const FooterContainerBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, 
    rgba(199, 216, 234, 0) 0%, 
    rgba(199, 216, 234, 0.5) 100%);
  z-index: -1;

  .mobile & {
    background: linear-gradient(180deg, 
      rgba(199, 216, 234, 0) 0%, 
      rgba(199, 216, 234, 0.6) 100%);
  }
`;