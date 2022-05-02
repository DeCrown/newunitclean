import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const Button = styled(DIV_BUTTON_BLUE_STYLE)`
  padding: 0 72px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  
  .mobile & {
    padding: 0px 20px;
    width: calc(100% - 40px);
  }
`;

export default Button;