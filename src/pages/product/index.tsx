import React, {useCallback, useEffect} from 'react';
import Content from "components/template/content";
import styled from "styled-components";
import Info from "components/product/info";
import Images from "components/product/images";
import OtherProducts from "components/product/otherProducts";
import Banner from "components/shared/duplicateComponents/banner";
import {BrowserView, isMobile} from "react-device-detect";
import {H1} from "components/shared/fonts/specialFonts";
import ImagesMobile from "components/product/imagesMobile";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "src/store/configureStore";
import {IStateProductList} from "src/reducers/ProductListReducer/ProductListReducer.types";
import {useDispatch} from "react-redux";
import {GetProductList} from "src/actions/ProductListAction/ProductListAction";
import {GetProduct} from "src/actions/ProductAction/ProductAction";
import {IStateProduct} from "src/reducers/ProductReducer/ProductReducer.types";

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

const Product = () => {
    const state = useTypedSelector((store) => store);
    const productState = state.Product as IStateProduct;

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    let { id } = useParams();

    useEffect(() => {
        stableDispatch(GetProduct(id));
    }, []);

    return (
        <Content>
            { isMobile ? <H1>{productState.product.title}</H1> : ''}

            <Container>
                { isMobile ?
                    <ImagesMobile images={productState.product.images ? productState.product.images : []}></ImagesMobile>
                    :
                    <Images images={productState.product.images ? productState.product.images : []}></Images> }
                <Info data={productState.product}></Info>
            </Container>

            <OtherProducts self={productState.product.id}></OtherProducts>

            <BrowserView>
                <MonthTrendContainer>
                    <Banner header={'Хит продаж'} text={'В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!'} image={'https://vgtimes.ru/uploads/gallery/main/171845/1583179297_6664.jpeg'}></Banner>
                </MonthTrendContainer>
            </BrowserView>
        </Content>
    );
};

export default Product;