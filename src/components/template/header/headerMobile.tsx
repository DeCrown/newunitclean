import React, {useEffect, useState} from 'react';
import {headerMenuBottomButton, headerMenuTopButton} from "src/utils/types";
import styled from "styled-components";
import {icons} from "src/utils/icons";
import logo from "src/logo/logo.png";
import * as constants from "src/utils/constants";

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
  
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.font.color.black};
  }
`;

const MovingTabLine = styled.div`
  height: 0px;
  border-bottom: 3px solid #C7D8EA;
  margin: 16px;
  width: calc(100% - 32px);
`;

const HeaderContainerMobile = (props: {topButtons: headerMenuTopButton[]; bottomButtons: headerMenuBottomButton[]}) => {

    const [pos, setPos] = useState(false);

    const switchTab = () => {
        setPos(!pos);
    }

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
                setPos(false);
            }
        }
        touches = [];
    }

    return (
        <HeaderTab>
            <HeaderTabButton onClick={switchTab}><img src={icons.menu}/></HeaderTabButton>
            <Logo><img src={logo}/></Logo>
            <HeaderTabButton><a href={constants.URLs.CART}><img src={icons.cart}/></a></HeaderTabButton>

            <MovingTab className={ pos ? 'opened' : 'closed' } onTouchStart={touchStart} onTouchEnd={touchEnd} onTouchMove={touchMove}>
                { props.topButtons.map((button) => <MovingTabButton><a href={button.href}>{button.text}</a></MovingTabButton>) }
                <MovingTabLine></MovingTabLine>
                { props.bottomButtons.map((button) => <MovingTabButton><a href={button.href}>{button.text}</a></MovingTabButton>) }
            </MovingTab>
        </HeaderTab>
    );
};

export default HeaderContainerMobile;