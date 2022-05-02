import React from 'react';
import Content from "components/template/content";
import styled from "styled-components";
import {Api} from "src/api";
import Info from "components/product/info";
import Images from "components/product/images";
import OtherProducts from "components/product/otherProducts";
import Banner from "components/shared/duplicateComponents/banner";
import {BrowserView, isMobile} from "react-device-detect";
import {H1} from "components/shared/fonts/specialFonts";
import ImagesMobile from "components/product/imagesMobile";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  
  .mobile & {
    grid-auto-flow: row;
    grid-template-columns: 100%;
    margin-top: 20px;
  }
`;

const MonthTrendContainer = styled.div`
  padding: 100px 0 154px 0;
`;

const Product = (/*props: {data: ProductType}*/) => {

    const props = {data: Api.Cart.all.get()[0]};

    return (
        <Content>
            { isMobile ? <H1>{props.data.title}</H1> : ''}

            <Container>
                { isMobile ?
                    <ImagesMobile images={props.data.image}></ImagesMobile>
                    :
                    <Images images={props.data.image}></Images> }
                <Info data={props.data}></Info>
            </Container>

            <OtherProducts></OtherProducts>

            <BrowserView>
                <MonthTrendContainer>
                    <Banner header={'Хит продаж'} text={'В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!'} image={'https://vgtimes.ru/uploads/gallery/main/171845/1583179297_6664.jpeg'}></Banner>
                </MonthTrendContainer>
            </BrowserView>
        </Content>
    );
};

export default Product;