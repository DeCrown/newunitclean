import React from 'react';

import {H1} from "components/shared/fonts/specialFonts";
import Shares from "components/promotions/shares";
import Content from "components/template/content";
import {isMobile} from "react-device-detect";

const Promotions = () => {

    return (
        <Content>
            <H1>{isMobile ? 'Акции' : 'Акции и предложения'}</H1>
            <Shares></Shares>
        </Content>
    );
};

export default Promotions;