import styled from "styled-components";

export const TopBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 668px;
  background: linear-gradient(180deg, 
    rgba(54, 81, 109, 0.5) 0, 
    rgba(255, 255, 255, 0) 100%);
  z-index: -1;
  
  .mobile & {
    background: linear-gradient(180deg, #36516D 0%, 
      rgba(255, 255, 255, 0) 100%);
  }
`;

export const ClearTopBackground = styled(TopBackground)`
  background: none !important;
`;