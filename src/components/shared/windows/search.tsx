import React from 'react';
import styled, {css} from "styled-components";
import {FormContainer} from "components/shared/forms/form";
import {InputText} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const Container = styled.div`
  
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  margin-top: 25px;
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`;

export const Search = () => {
    return (
        <FormContainer background={true}>
            <Container>
                <InputText placeholder={'Поиск'}></InputText>
                <ButtonBlue styled={ButtonStyle}>Найти</ButtonBlue>
            </Container>
        </FormContainer>
    );
};