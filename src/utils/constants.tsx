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
    wildberries: 'https://www.wildberries.ru/catalog/0/search.aspx?sort=popular&search=unit+clean',
    ozon: 'https://www.ozon.ru/brand/unit-clean-87316275/',
    ya_market: 'https://market.yandex.ru/catalog--avto/54418/list?srnum=20&was_redir=1&rt=9&rs=eJwzEg1grGLh2HeIdRYjV2heZolCck5qYh4ASxcHDA,,&text=Unit clean&hid=90402&local-offers-first=0'
}

//export const BASE_URL = 'http://84.23.55.240:5050';
export const BASE_URL = 'http://141.8.193.185';

export const CONTACT_MAP = (props: {height?: string; width?: string}) => {
    return(
        /*<iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7127.6563509762045!2d37.61879521129864!3d55.757272203531606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a4a4f3077%3A0xa7583549db7aeb5e!2z0J_Qu9C-0YnQsNC00Ywg0KDQtdCy0L7Qu9GO0YbQuNC4!5e0!3m2!1sru!2sru!4v1651319102034!5m2!1sru!2sru"
            height={props.height} width={props.width} style={{border:0}} allowFullScreen={true} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>*/
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.6375263591535!2d37.58030441563861!3d55.78216699719469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a1f98b0b993%3A0x900e8d5adda26f8a!2zMy3RjyDQr9C80YHQutC-0LPQviDQn9C-0LvRjyDRg9C7LiwgMiDQutC-0YDQv9GD0YEgMjYsINCc0L7RgdC60LLQsCwgMTI1MDQw!5e0!3m2!1sru!2sru!4v1665586254245!5m2!1sru!2sru"
            height={props.height} width={props.width} style={{border:0}} allowFullScreen={true} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    );
}