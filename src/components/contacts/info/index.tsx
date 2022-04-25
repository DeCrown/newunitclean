import React from 'react';
import InfoRow from "./infoRow";
import {INFO, LINKS} from "../../../utils/constants";
import Link from "./link";
import {icons} from "../../../utils/icons";
import styles from "./info.module.css"

const links = [
    {
        icon: icons.favourite,
        url: LINKS.whatsapp
    },
    {
        icon: icons.favourite,
        url: LINKS.youtube
    },
    {
        icon: icons.favourite,
        url: LINKS.telegram
    },
    {
        icon: icons.favourite,
        url: LINKS.instagram
    },
    {
        icon: icons.favourite,
        url: LINKS.wildberries
    }
];

const Info = () => {
    return (
        <div className={styles.rows}>
            <InfoRow title={'Адрес'} value={INFO.ADDRESS}></InfoRow>
            <InfoRow title={'Телефон'} value={INFO.PHONE_NUMBER}></InfoRow>
            <InfoRow title={'E-mail'} value={INFO.ADDRESS}></InfoRow>
            <InfoRow title={'Мы в соц. сетях'} value={''}></InfoRow>
            <div>
                { links.map((link) => <Link image={link.icon} url={link.url}></Link>) }
            </div>
        </div>
    );
};

export default Info;