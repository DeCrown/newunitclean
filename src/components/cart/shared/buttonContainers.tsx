import styled from "styled-components";

export const ButtonContainerCenter = styled.div`
  display: grid;
  justify-content: center;
  
  .mobile & {
    justify-content: normal;
  }
`;

export const ButtonContainerLeft = styled(ButtonContainerCenter)`
  justify-content: left;
`;