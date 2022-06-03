import React from 'react';
import {headerMenuBottomButton, headerMenuTopButton} from "src/utils/types";
import styled from "styled-components";
import {icons} from "src/utils/icons";
import logo from "src/logo/logo.png";
import * as constants from "src/utils/constants";
import HeaderButton from "components/template/header/headerButton";
import {useDispatch} from "react-redux";
import {CloseMobileMenu, SwitchMobileMenu} from "src/actions/MobileMenuAction/MobileMenuAction";
import {useTypedSelector} from "src/store/configureStore";
import {IStateMobileMenu} from "src/reducers/MobileMenuReducer/MobileMenuReducer.types";

const HeaderTab = styled.div`
  background: ${({ theme }) => theme.font.color.mobileTopTab};
  display: flex;
  position: relative;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const HeaderTabButton = styled.div`
  display: grid;
  align-items: center;
  padding: 0 16px;
  z-index: 3;
`;

const Logo = styled.div`
  height: 100%;
  & img {
    position: relative;
    top: 10%;
    height: 80%;
  }
`;

const MovingTab = styled.div`
  background: #ADB8C4F5;
  position: fixed;
  z-index: 2;
  display: grid;
  grid-gap: 30px;
  justify-items: start;
  min-width: 80%;
  min-height: calc(100% + 60px);
  align-content: center;
  bottom: 0;
  transition: left 0.2s ease-in;
  left: -100%;
  
  &.opened {
    left: 0;
  }
`;

const MovingTabButton = styled.div`
  padding-left: 16px;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
`;

const MobileButtonStyle = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.font.color.black};
`;

const MovingTabLine = styled.div`
  height: 0px;
  border-bottom: 3px solid #C7D8EA;
  margin: 16px;
  width: calc(100% - 32px);
`;

const HeaderContainerMobile = (props: {topButtons: headerMenuTopButton[]; bottomButtons: headerMenuBottomButton[]}) => {
    const MobileMenu = useTypedSelector((store) => store.MobileMenu);
    const {opened} = MobileMenu as IStateMobileMenu;
    const dispatch = useDispatch();

    let touches:number[] = [];

    const touchStart = (event: any) => {
        for (let i = 0; i < event.touches.length; i++) {
            let t = event.touches.item(i);
            if (t) {
                touches.push(t.screenX)
            }
        }
    }

    const touchMove = (event: any) => {
        for (let i = 0; i < event.touches.length; i++) {
            let t = event.touches.item(i);
            if (t) {
                touches.push(t.screenX)
            }
        }
    }

    const touchEnd = (event: any) => {
        for (let i = 0; i < event.touches.length; i++) {
            let t = event.touches.item(i);
            if (t) {
                touches.push(t.screenX)
            }
        }

        if (touches.length > 1) {
            if (touches[touches.length - 2] - touches[touches.length - 1] > 5) {
                CloseMobileMenu()(dispatch);
            }
        }
        touches = [];
    }

    return (
        <HeaderTab>
            <HeaderTabButton onClick={() => SwitchMobileMenu()(dispatch)}><img src={icons.menu}/></HeaderTabButton>
            <Logo><img src={logo}/></Logo>
            <HeaderTabButton>
                <HeaderButton styled={styled.a``} href={constants.URLs.CART} auth={true} >
                    <img src={icons.cart}/>
                </HeaderButton>
            </HeaderTabButton>

            <MovingTab className={ opened ? 'opened' : 'closed' } onTouchStart={touchStart} onTouchEnd={touchEnd} onTouchMove={touchMove}>
                { props.topButtons.map((button) => <MovingTabButton><MobileButton data={button} /></MovingTabButton>) }
                <MovingTabLine></MovingTabLine>
                { props.bottomButtons.map((button) => <MovingTabButton><MobileButton data={button} /></MovingTabButton>) }
            </MovingTab>
        </HeaderTab>
    );
};

const MobileButton = (props: {data: headerMenuTopButton | headerMenuBottomButton}) => {
    return (
        <HeaderButton styled={MobileButtonStyle} href={props.data.href} func={props.data.func} auth={props.data.auth}>
            {props.data.text}
        </HeaderButton>
    );
}

export default HeaderContainerMobile;