import React from 'react';

import {H1} from "components/shared/fonts/specialFonts";
import Content from "components/template/content";
import Registration from "components/lk/registration";
import Info from "components/lk/info";
import PromoCode from "components/lk/promoCode";
import BuyHistory from "components/lk/buyHistory";

const Lk = () => {

    return (
        <Content>
            <H1>Личный кабинет</H1>

            <Info></Info>

            <Registration></Registration>

            <PromoCode></PromoCode>

            <BuyHistory></BuyHistory>
        </Content>
    );
};

export default Lk;