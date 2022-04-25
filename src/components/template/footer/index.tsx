import React from 'react';
import * as constants from "src/utils/constants";
import logo from "src/logo/logo.png";
import INPUT_TEXT from "components/shared/forms/primitives/INPUT_TEXT";
import styled from "styled-components";
import {isMobile} from "react-device-detect";

const FooterStyle = styled.div`
  background: #1C446EAB;
  height: 316px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  
  .mobile & {
    height: auto;
    grid-auto-flow: row;
    grid-template-columns: auto;
    background: #3C5773;
    padding: 16px;
  }
`;

const Info = styled.div`
  text-align: left;
  display: grid;
  justify-content: center;
  align-content: start;
  grid-gap: 20px;
  font-size: ${({ theme }) => theme.font.size[12]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.white};
  
  .mobile & {
    justify-content: start;
  }
`;

const Logo = styled.div`{
  & img {
    height: 80px;
    margin-top: 20px;
  }
  
  .mobile & img {
    height: auto;
    width: 30%;
  }
}`;

const HighText = styled.div`
  font-size: 16px;
`;

const Navigation = styled.div`
  text-align: left;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: 20px;
  
  .mobile & {
    margin-top: 40px;
    margin-bottom: 60px;
    justify-content: stretch;
  }
`;

const NavigationList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-flow: column;
  grid-gap: 16px 32px;
  font-size: ${({ theme }) => theme.font.size[12]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.white};
`;

const Title = styled.div`
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[18]};
  }
`;

const NavigationHeader = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  
  .mobile & {
    justify-self: center;
  }
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  &:visited {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Search = styled.div`
  display: grid;
  padding: 60px 40px;
  
  .mobile & {
    padding: 0px;
  }
`;

const Footer = () => {
    return (
        isMobile ?
            <FooterStyle>
                <Info>
                    <Logo><img src={logo} /></Logo>
                    <Title>{constants.INFO.TITLE}</Title>
                    <Search>
                        <INPUT_TEXT placeholder='Поиск'></INPUT_TEXT>
                    </Search>
                    <HighText>{constants.INFO.PHONE_NUMBER}</HighText>
                    <HighText>{constants.INFO.EMAIL}</HighText>
                    <div>{constants.INFO.ADDRESS}</div>
                </Info>
                <Navigation>
                    <NavigationHeader>Навигация</NavigationHeader>
                    <NavigationList>
                        <Link href={constants.URLs.ROOT}>Главная</Link>
                        <Link href={constants.URLs.CATALOG}>Каталог</Link>
                        <Link href={constants.URLs.PROMOTION}>Акции</Link>
                        <Link href={constants.URLs.CONTACTS}>Контакты</Link>
                        <Link href={constants.URLs.REVIEWS}>Отзывы</Link>
                        <Link href={constants.URLs.CART}>Корзина</Link>
                        <Link href={constants.URLs.PAYMENT}>Доставка и оплата</Link>
                        <Link href={constants.URLs.LK}>Личный кабинет</Link>
                    </NavigationList>
                </Navigation>
            </FooterStyle>
            :
            <FooterStyle>
                <Info>
                    <Logo><img src={logo} /></Logo>
                    <div>{constants.INFO.TITLE}</div>
                    <HighText>{constants.INFO.PHONE_NUMBER}</HighText>
                    <HighText>{constants.INFO.EMAIL}</HighText>
                    <div>{constants.INFO.ADDRESS}</div>
                </Info>
                <Navigation>
                    <NavigationHeader>Навигация</NavigationHeader>
                    <NavigationList>
                        <Link href={constants.URLs.ROOT}>Главная</Link>
                        <Link href={constants.URLs.CATALOG}>Каталог</Link>
                        <Link href={constants.URLs.PROMOTION}>Акции</Link>
                        <Link href={constants.URLs.CONTACTS}>Контакты</Link>
                        <Link href={constants.URLs.REVIEWS}>Отзывы</Link>
                        <Link href={constants.URLs.CART}>Корзина</Link>
                        <Link href={constants.URLs.PAYMENT}>Доставка и оплата</Link>
                        <Link href={constants.URLs.LK}>Личный кабинет</Link>
                    </NavigationList>
                </Navigation>
                <Search>
                    <INPUT_TEXT placeholder='Поиск'></INPUT_TEXT>
                </Search>
            </FooterStyle>
    );
};

export default Footer;