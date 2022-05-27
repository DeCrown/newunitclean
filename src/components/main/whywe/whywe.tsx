import React from 'react';
import Reason, {reason} from "./reason";
import styled from "styled-components";
import {H2Main} from "components/shared/fonts/specialFonts";
import {icons} from "src/utils/icons";

const Reasons:reason[] = [
    {icon: icons.reasons.security, text: 'Высокое качество продукции за разумную цену.'},
    {icon: icons.reasons.wallet, icon_clicked: icons.reasons.wallet_clicked, clickable: true,
        text: 'Оперативность и гибкая система оплаты, возможность протестировать продукт.'},
    {icon: icons.reasons.chat, text: 'Индивидуальный подход к каждому клиенту. '},
    {icon: icons.reasons.settings, text: 'Возможна разработка продукта по запросу клиента.'}
];

const WhyWeStyle = styled.div`
  clear: both;
  margin-top: 180px;
  
  .mobile &{
    margin-top: 0px;
  }
`;

const WhyWeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 30px;
  
  .mobile & {
    display: grid;
    grid-auto-flow: column;
    justify-content: left;
    overflow-x: scroll;
    margin: -30px -${({ theme }) => theme.values.contentMobileMargin}px;
    padding: 30px ${({ theme }) => theme.values.contentMobileMargin}px;
  }
`;

const WhyWe = () => {
    return (
        <WhyWeStyle>
            <H2Main>Почему выбирают нас?</H2Main>
            <WhyWeContainer>
                { Reasons.map((reason, i) => <Reason key={i} reason={reason}></Reason>) }
            </WhyWeContainer>
        </WhyWeStyle>
    );
};

export default WhyWe;