import React from 'react';
import {Api} from "src/api";
import TabContent from "components/shared/tabsMenu/tabContent";
import PromotionsList from "components/promotions/shared/promotionsList";

const All = () => {

    const promotions = Api.Promotions.get();

    return (
        promotions.length
            ?
            <TabContent>
                <PromotionsList promotions={promotions}></PromotionsList>
            </TabContent>
            :
            <TabContent>

            </TabContent>
    );
};

export default All;