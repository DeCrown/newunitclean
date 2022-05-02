import React from 'react';
import Map from "components/payment/map";
import Content from "components/template/content";
import styled from "styled-components";
import {H1} from "components/shared/fonts/specialFonts";
import InputList from "components/payment/inputList";
import MarketPlace from "components/payment/marketPlace";
import MoreInfo from "components/payment/moreInfo";
import {BrowserView} from "react-device-detect";
import Banner from "components/shared/duplicateComponents/banner";

const Container = styled.div`
  display: grid;
  grid-template-areas: 
    "inputs map map"
    "inputs marketPlace moreInfo";
  grid-template-columns: 40%;
  grid-gap: 30px;
  align-items: end;
  
  .mobile & {
    grid-template-areas: 
      "inputs"
      "marketPlace"
      "moreInfo"
      "map";
    grid-template-columns: 100%;
    grid-column-gap: 0px;
  }
`;

const MonthTrendContainer = styled.div`
  padding: 100px 0 154px 0;
`;

const Payment = () => {
    return (
        <Content>
            <H1>Доставка и оплата</H1>

            <Container>
                <InputList></InputList>
                <MarketPlace></MarketPlace>
                <MoreInfo></MoreInfo>
                <Map></Map>
            </Container>

            <BrowserView>
                <MonthTrendContainer>
                    <Banner header={'Тренд месяца'} text={'В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!'}></Banner>
                </MonthTrendContainer>
            </BrowserView>
        </Content>
    );
};

export default Payment;