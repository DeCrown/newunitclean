import React from 'react';

import TabsMenu from "components/shared/tabsMenu";
import {H1} from "components/shared/fonts/headers";
import Coupons from "components/promotions/coupons";
import Shares from "components/promotions/shares";
import All from "components/promotions/all";

const Promotions = () => {

    return (
        <div className={'content no_up'}>
            <H1>Акции</H1>

            <TabsMenu tabs={[
                {
                    title: 'Все акции',
                    content: <All></All>
                },
                {
                    title: 'Акции',
                    content: <Shares></Shares>
                },
                {
                    title: 'Купоны',
                    content: <Coupons></Coupons>
                }
            ]}></TabsMenu>
        </div>
    );
};

export default Promotions;