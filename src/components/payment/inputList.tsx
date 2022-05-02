import React from 'react';
import {
    InputAddress,
    InputFIO,
    InputPhoneNumber,
} from "components/shared/forms/InputText";
import styled, {css} from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const InputListStyle = styled.div`
  grid-area: inputs;

  display: grid;
  grid-gap: 20px;
  justify-content: end;
  justify-self: start;

  & input {
    min-width: 370px;
  }

  .mobile & {
    justify-content: normal;
    width: 100%;
    
    & input {
      min-width: 0px;
    }
  }
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  height: 47px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  margin-top: 40px;
  
  .mobile & {
    margin: 0;
  }
`;

const InputList = () => {
    return (
        <InputListStyle>
            <InputFIO placeholder={'Укажите ваше ФИО'}></InputFIO>
            <InputPhoneNumber placeholder={'Укажите ваш номер телефона'}></InputPhoneNumber>
            <InputAddress placeholder={'Выберите способ доставки'}></InputAddress>
            <InputAddress placeholder={'Укажите адрес доставки'}></InputAddress>
            <InputAddress placeholder={'Выберите способ оплаты'}></InputAddress>
            <ButtonStyle>Заказать доставку</ButtonStyle>
        </InputListStyle>
    );
};

export default InputList;