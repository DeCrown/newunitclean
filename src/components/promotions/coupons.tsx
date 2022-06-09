import React from 'react';
import TabContent from "components/shared/tabsMenu/tabContent";
import PromoCode from "./promoCode";
import Banner from "components/shared/duplicateComponents/banner";
import styled from "styled-components";
import {isMobile} from "src/utils/isMobile";

const MonthTrendContainer = styled.div`
  padding: 20px 0 20px 0;
`;

const Coupons = () => {

    return (
        <TabContent>
            <PromoCode></PromoCode>
            {isMobile() ? null :
                <MonthTrendContainer>
                    <Banner header={'Тренд месяца'}
                            text={'В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!'}></Banner>
                </MonthTrendContainer>
            }
        </TabContent>
    );
};

export default Coupons;