import React from 'react';
import {Api} from "src/api";
import TabContent from "components/shared/tabsMenu/tabContent";
import PromotionsList from "components/promotions/shared/promotionsList";
import Banner from "components/shared/duplicateComponents/banner";
import {BrowserView} from "react-device-detect";
import styled from "styled-components";

const MonthTrendContainer = styled.div`
  padding: 20px 0 20px 0;
`;

const Shares = () => {

    const promotions = Api.Promotions.get();

    return (
        promotions.length
            ?
            <TabContent>
                <PromotionsList promotions={promotions}></PromotionsList>
                <BrowserView>
                    <MonthTrendContainer>
                        <Banner header={'Тренд месяца'} text={'В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!'}></Banner>
                    </MonthTrendContainer>
                </BrowserView>
            </TabContent>
            :
            <TabContent>

            </TabContent>
    );
};

export default Shares;