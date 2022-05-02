import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import {store} from "src/store";

import { HeaderContainer } from "components/template/header/headerBrowser";
import HeaderContainerMobile from "components/template/header/headerMobile";
import * as constants from "src/utils/constants";
import {icons} from "src/utils/icons";
import {Search} from "components/shared/windows/search";

const topButtons = [
    {href: constants.URLs.ROOT, text: "Главная"},
    {href: constants.URLs.CATALOG, text: "Каталог"},
    {href: constants.URLs.PROMOTION, text: "Акции"},
    {href: constants.URLs.PAYMENT, text: "Доставка и оплата"},
    {func: () => {
            const titleElement = document.getElementById('feedback');
            if (titleElement) {
                titleElement.scrollIntoView({behavior: 'smooth'});
            }
        }, text: "Отзывы"},
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
    {href: constants.URLs.LK, text: "Личный кабинет", icon: icons.lk},
    {href: constants.URLs.CART, text: "Корзина", icon: icons.cart},
    {func: () => {/*
        store.dispatch(
            {
                type: 'SET_ACTIVE_WINDOW',
                payload: Search
            })
        */}, text: "Поиск", icon: icons.search}
];

const Header = () => {
    return (
        <div>
            <BrowserView>
                <HeaderContainer topButtons={topButtons} bottomButtons={bottomButtons}></HeaderContainer>
            </BrowserView>
            <MobileView>
                <HeaderContainerMobile topButtons={topButtonsMobile} bottomButtons={bottomButtons}></HeaderContainerMobile>
            </MobileView>
        </div>
    );
};

export default Header;