import React from 'react';
import Content from "components/template/content";
import styled from "styled-components";
import {H1} from "components/shared/fonts/specialFonts";
import InputList from "components/payment/inputList";
import Banner from "components/shared/duplicateComponents/banner";
import MapAndButtons from "components/payment/mapAndButtons";
import {isMobile} from "src/utils/isMobile";

const Container = styled.div`
  /*display: grid;
  grid-template-areas: 
    "inputs map map"
    "inputs marketPlace moreInfo";
  grid-template-columns: 40%;
  grid-gap: 30px; gap: 30px;
  align-items: end;*/
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 30px; gap: 30px;
  
  .mobile & {
    /*grid-template-areas: 
      "inputs"
      "marketPlace"
      "moreInfo"
      "map";
    grid-template-columns: 100%;
    grid-column-gap: 0px;*/
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
                <MapAndButtons></MapAndButtons>
            </Container>

            { /*
            isMobile() ? null :
                <MonthTrendContainer>
                    <Banner header={'Тренд месяца'} text={'В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!'}></Banner>
                </MonthTrendContainer>
                */
            }
        </Content>
    );
};

export default Payment;