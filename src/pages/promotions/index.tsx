import React from 'react';

import TabsMenu from "components/shared/tabsMenu";
import {H1} from "components/shared/fonts/specialFonts";
import Coupons from "components/promotions/coupons";
import Shares from "components/promotions/shares";
import Content from "components/template/content";
import {isMobile} from "react-device-detect";

const Promotions = () => {

    return (
        <Content>
            <H1>{isMobile ? 'Акции' : 'Акции и предложения'}</H1>

            <TabsMenu tabs={[
                {
                    title: 'Акции',
                    content: <Shares></Shares>
                },
                {
                    title: 'Купоны',
                    content: <Coupons></Coupons>
                }
            ]}></TabsMenu>
        </Content>
    );
};

export default Promotions;