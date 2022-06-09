import React from 'react';
import { HeaderContainer } from "components/template/header/headerBrowser";
import HeaderContainerMobile from "components/template/header/headerMobile";
import * as constants from "src/utils/constants";
import {icons} from "src/utils/icons";
import {openSearch, showFeedback} from "components/template/header/headerFuncs";
import {ClearTopBackground, TopBackground} from "components/template/backgrounds/topBackground";
import {isMobile} from "src/utils/isMobile";

const topButtons = [
    {href: constants.URLs.ROOT, text: "Главная"},
    {href: constants.URLs.CATALOG, text: "Каталог"},
    {href: constants.URLs.PROMOTION, text: "Акции"},
    {href: constants.URLs.PAYMENT, text: "Доставка и оплата"},
    {func: showFeedback, text: "Отзывы"},
    {href: constants.URLs.CONTACTS, text: "Контакты"}
];

const topButtonsMobile = [
    {href: constants.URLs.ROOT, text: "Главная"},
    {href: constants.URLs.CATALOG, text: "Каталог"},
    {href: constants.URLs.PROMOTION, text: "Акции"},
    {href: constants.URLs.PAYMENT, text: "Доставка и оплата"},
    {href: constants.URLs.CONTACTS, text: "Контакты"}
];

const bottomButtons = [
    {href: constants.URLs.LK, text: "Личный кабинет", icon: icons.lk, auth: true},
    {href: constants.URLs.CART, text: "Корзина", icon: icons.cart, auth: true},
    {func: openSearch, text: "Поиск", icon: icons.search}
];

const Header = (props: {clearBackground?: boolean}) => {
    return (
        <div>
            { props.clearBackground ? <ClearTopBackground></ClearTopBackground> : <TopBackground></TopBackground>}
            {
                isMobile() ?
                    <HeaderContainerMobile topButtons={topButtonsMobile} bottomButtons={bottomButtons}></HeaderContainerMobile>
                    :
                    <HeaderContainer topButtons={topButtons} bottomButtons={bottomButtons}></HeaderContainer>
            }
        </div>
    );
};

export default Header;