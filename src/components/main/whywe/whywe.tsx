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
  .mobile & {
    display: grid;
    grid-auto-flow: column;
    justify-content: left;
    overflow-x: scroll;
    margin: -30px -${({ theme }) => theme.values.contentMobileMargin}px;
    padding: 30px ${({ theme }) => theme.values.contentMobileMargin}px;
    //grid-auto-columns: 270px;
  }
`;

const WhyWeReasons = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 30px; gap: 30px;
  grid-auto-columns: 1fr;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    filter: drop-shadow(0px 4px 1px rgb(0, 0, 0, 1));
    top: 43%;
  }
`;

const WhyWe = () => {
    return (
        <WhyWeStyle>
            <H2Main>Почему выбирают нас?</H2Main>
            <WhyWeContainer>
                <WhyWeReasons>
                    { Reasons.map((reason, i) => <Reason key={i} reason={reason}></Reason>) }
                </WhyWeReasons>
            </WhyWeContainer>
        </WhyWeStyle>
    );
};

export default WhyWe;