import React, {useCallback, useEffect} from 'react';
import TabContent from "components/shared/tabsMenu/tabContent";
import PromotionsList from "components/promotions/shared/promotionsList";
import Banner from "components/shared/duplicateComponents/banner";
import styled from "styled-components";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {IStatePromotions} from "src/reducers/PromotionsReducer/PromotionsReducer.types";
import {GetPromotions} from "src/actions/PromotionsAction/PromotionsAction";
import {isMobile} from "src/utils/isMobile";
import Empty from "./shared/empty";

const MonthTrendContainer = styled.div`
  padding: 20px 0 20px 0;
`;

const Shares = () => {
    const Promotions = useTypedSelector((store) => store.Promotions);
    const {promotions, isFetching, error} = Promotions as IStatePromotions;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetPromotions());
    }, []);

    return (
        <TabContent>
            { promotions.length > 0
                ?
                <PromotionsList promotions={promotions}></PromotionsList>
                :
                <Empty />
            }
            {
                isMobile() ? null :
                    <MonthTrendContainer>
                        <Banner header={'Тренд месяца'} text={'В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!'}></Banner>
                    </MonthTrendContainer>
            }
        </TabContent>
    );
};

export default Shares;