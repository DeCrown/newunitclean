import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {InputEMail, InputFIO, InputPhoneNumber} from "components/shared/forms/inputText";
import InputTextField from "components/shared/forms/inputTextField";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {icons} from "src/utils/icons";
import {FormCloseStyle} from "components/shared/forms/form";
import {WindowsManagerClear} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {useDispatch} from "react-redux";
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";

const TestingContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 340px;
  right: 60px;
  height: 100%;
  top: 0;
  display: grid;
  align-content: center;
`;

const TestingStyle = styled.div`
  background: #fff;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5));
  border-radius: 12px;
  padding: 40px 16px;
  height: min-content;
`;

const Close = styled.div`
  
`;

const Header = styled.div`
  font-size: ${({ theme }) => theme.font.size[24]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  padding-bottom: 16px;
  text-align: left;
  border-bottom: 2px solid #D13631;
  margin-right: 39px;
`;

const Row = styled.div`
  
`;

const RowHeader = styled.div`
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: black;
  height: 44px;
  display: grid;
  grid-auto-flow: column;
  align-content: end;
  justify-content: start;
  padding-bottom: 8px;
  text-align: left;
`;

const RowHeaderRed = styled.span`
  margin-left: 2px;
  color: ${({ theme }) => theme.font.color.red};
`;

const ButtonSend = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  margin-top: 16px;
`;

const ButtonSendSuccess = styled(ButtonSend)`
  box-shadow: 0px 0px 0px 4px rgba(0, 255, 0, 0.2);
`;

const ButtonSendError = styled(ButtonSend)`
  box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
`;

const Testing = () => {
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    const [fio, setFio] = useState<any>(null);
    const [email, setEmail] = useState<any>(null);
    const [phone, setPhone] = useState<any>(null);
    const [comment, setComment] = useState<any>(null);
    const [button, setButton] = useState<any>(null);

    const send = () => {
        if (fio.obj.checkError()
            + email.obj.checkError()
            + phone.obj.checkError()
            + comment.obj.checkError()) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        AppendApiMethod({
            func: 'post', url: '/employee/api/v2/test_order/',
            data: {
                full_name: fio.value,
                email: email.value,
                phone_number: phone.value,
                comment: comment.value
            },
            success: (success) => {
                fio.obj.clear();
                email.obj.clear();
                phone.obj.clear();
                comment.obj.clear();
                button.Animate({Styled: ButtonSendSuccess, Children: 'Заявка отправлена', timeOut: 2000});
            },
            error: (error) => {
                button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            }
        })(dispatch);
    }

    return (
        <TestingContainer>
            <TestingStyle>
                <FormCloseStyle onClick={() => stableDispatch(WindowsManagerClear())}>
                    <img src={icons.close} />
                </FormCloseStyle>
                <Header>Тестирование</Header>
                <Row>
                    <RowHeader>ФИО<RowHeaderRed>*</RowHeaderRed></RowHeader>
                    <InputFIO placeholder={'Введите ваше ФИО'} setObj={setFio}></InputFIO>
                </Row>
                <Row>
                    <RowHeader>Электронная почта<RowHeaderRed>*</RowHeaderRed></RowHeader>
                    <InputEMail placeholder={'Введите ваш EMail'} setObj={setEmail}></InputEMail>
                </Row>
                <Row>
                    <RowHeader>Телефон<RowHeaderRed>*</RowHeaderRed></RowHeader>
                    <InputPhoneNumber placeholder={'Введите ваш номер телефона'} setObj={setPhone}></InputPhoneNumber>
                </Row>
                <Row>
                    <RowHeader>Какую продукцию вы хотите отправить на тестирование?</RowHeader>
                    <InputTextField setObj={setComment}></InputTextField>
                </Row>
                <ButtonBlue styled={ButtonSend} func={send} setObj={setButton}>Отправить</ButtonBlue>
            </TestingStyle>
        </TestingContainer>
    );
};

export default Testing;