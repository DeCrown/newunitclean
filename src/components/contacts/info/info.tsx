import React from 'react';
import InfoRow from "./infoRow";
import {INFO, LINKS} from "src/utils/constants";
import {icons} from "src/utils/icons";
import styled from "styled-components";
import Link from "components/contacts/info/link";

const links = [
    {
        icon: icons.links.whatsapp,
        url: LINKS.whatsapp
    },
    {
        icon: icons.links.youtube,
        url: LINKS.youtube
    },
    {
        icon: icons.links.telegram,
        url: LINKS.telegram
    },
    {
        icon: icons.links.instagram,
        url: LINKS.instagram
    },
    {
        icon: icons.links.ozon,
        url: LINKS.ozon,
        height: '20px'
    },
    {
        icon: icons.links.wildberries,
        url: LINKS.wildberries,
        height: '36px'
    }
];

const Rows = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const Links = styled.div`
  display: flex;
  justify-items: start;
  //grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-gap: 16px;
  flex-wrap: wrap;
`;

const Info = () => {
    return (
        <Rows>
            <InfoRow title={'Адрес'} value={INFO.ADDRESS}></InfoRow>
            <InfoRow title={'Телефон'} value={INFO.PHONE_NUMBER}></InfoRow>
            <InfoRow title={'E-mail'} value={INFO.ADDRESS}></InfoRow>
            <InfoRow title={'Мы в соц. сетях'} value={''}></InfoRow>
            <Links>
                { links.map((link, i) => <Link height={link.height ? link.height : 'auto'} key={i} image={link.icon} url={link.url}></Link>) }
            </Links>
        </Rows>
    );
};

export default Info;