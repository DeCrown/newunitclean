import styled, {css} from "styled-components";

export const HEADER_STYLE = css`
  padding: 22px;
  margin: 0;
  color: ${({ theme }) => theme.font.color.black};
  font-size: ${({ theme }) => theme.font.size[36]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[20]};
    font-weight: ${({ theme }) => theme.font.weight[800]};
  }
`;

export const H1 = styled.h1`
  ${HEADER_STYLE};
`;

export const H2 = styled.h2`
  padding: 50px 0;
  margin: 0;
  color: ${({ theme }) => theme.font.color.black};
  font-size: ${({ theme }) => theme.font.size[28]};
  font-weight: ${({ theme }) => theme.font.weight[900]};

  .mobile & {
    font-size: ${({ theme }) => theme.font.size[20]};
    font-weight: ${({ theme }) => theme.font.weight[800]};
  }
`;

export const H2Main = styled.h2`
  ${HEADER_STYLE};
  padding: 50px 0;
`;

export const FormHeader = styled.div`
  ${HEADER_STYLE};
`;

export const FormText = styled.div`
  font-size: ${({ theme }) => theme.font.size[28]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[18]};
  }
`;

export const H3 = styled.h2`
  padding: 22px;
  margin: 0;
  color: ${({ theme }) => theme.font.color.black};
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[800]};
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[20]};
    font-weight: ${({ theme }) => theme.font.weight[800]};
  }
`;