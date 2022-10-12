import React from "react";

export const URLs = {
    ROOT: '/',
    CATALOG: '/catalog',
    PROMOTION: '/promotion',
    PAYMENT: '/payment',
    REVIEWS: '/reviews',
    CONTACTS: '/contacts',
    LK: '/lk',
    CART: '/cart',
    PRODUCT: '/product/:id',
    COMPANY_LK: '/company',
    SEARCH: '/search',
    SEARCH_WITH_PARAM: '/search/:search',
    P404: '*'
}

export const INFO = {
    TITLE: 'Химические средства для клининга',
    PHONE_NUMBER: '+ 7 (495) 151 37 51',
    EMAIL: 'invest@pmk-team.ru',
    ADDRESS: 'ул. 3-я Ямского поля, д.2, корп. 26'
}

export const LINKS = {
    whatsapp: '',
    youtube: '',
    telegram: '',
    instagram: '',
    wildberries: '',
    ozon: '',
}

export const BASE_URL = 'http://84.23.55.240:5050';

export const CONTACT_MAP = (props: {height?: string; width?: string}) => {
    return(
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7127.6563509762045!2d37.61879521129864!3d55.757272203531606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a4a4f3077%3A0xa7583549db7aeb5e!2z0J_Qu9C-0YnQsNC00Ywg0KDQtdCy0L7Qu9GO0YbQuNC4!5e0!3m2!1sru!2sru!4v1651319102034!5m2!1sru!2sru"
            height={props.height} width={props.width} style={{border:0}} allowFullScreen={true} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    );
}