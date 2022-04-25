import {css} from "styled-components";

const Button = css`
  padding: 0 72px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  
  .mobile & {
    padding: 0px 20px;
    width: calc(100% - 40px);
  }
`;

export default Button;