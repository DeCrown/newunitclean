import React from "react";

import styled from "styled-components";
import * as constants from "src/utils/constants";
import logo from "src/logo/croppedlogo.png";
import HeaderTopButton from "components/template/header/topButton";
import HeaderBottomMenuButton from "components/template/header/bottomMenuButton";
import {headerMenuBottomButton, headerMenuTopButton} from "src/utils/types";
import {useDispatch} from "react-redux";
import {Authorization} from "components/shared/windows/authorization";

const HeaderContainerStyle = styled.div`
  background: #ADB8C4;
  height: 92px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
`;

const HeaderTop = styled.div`
  background: #000000BD;
  display: grid;
  grid-template-columns: 45% 5% auto auto auto auto auto auto 10%;
  grid-template-rows: 28px;
`;

const HeaderTopText = styled.div`
  display: grid;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
`;

const HeaderBottom = styled.div`
  display: grid;
  background: #ADB8C4;
  grid-template-rows: 64px;
  color: #000;
  grid-template-columns: 45% 20% auto;
`;

const Logo = styled.div`
  & img {
    height: 100%;
  }
`;

const PhoneNumber = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const PhoneNumberText = styled.div`
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[800]};
`;

const PhoneNumberButton = styled.div`
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  
  border: 2px solid #000;
  border-radius: 10px;
  height: 25px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  background: #ADB8C4;
  transition: filter 0.5s;
  
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  }
`;

const HeaderBottomMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderContainer = (props: {topButtons: headerMenuTopButton[]; bottomButtons: headerMenuBottomButton[]}) => {

    const dispatch = useDispatch();

    const openRegistration = () => {
        dispatch({
            type: 'SET_ACTIVE_WINDOW',
            payload: Authorization
        });
    }

    return (
        <HeaderContainerStyle>
            <HeaderTop>
                <HeaderTopText>{constants.INFO.TITLE}</HeaderTopText>
                <div></div>
                {
                    props.topButtons.map((button, i) => <HeaderTopButton data={button} key={i} />)
                }
            </HeaderTop>

            <HeaderBottom>
                <Logo>
                    <img src={logo} />
                </Logo>
                <PhoneNumber>
                    <PhoneNumberText>{constants.INFO.PHONE_NUMBER}</PhoneNumberText>
                    <PhoneNumberButton>Заказать звонок</PhoneNumberButton>
                </PhoneNumber>
                <HeaderBottomMenu>
                    {
                        props.bottomButtons.map((button, i) => <HeaderBottomMenuButton key={i} data={button}/>)
                    }
                </HeaderBottomMenu>
            </HeaderBottom>
        </HeaderContainerStyle>
    );
}