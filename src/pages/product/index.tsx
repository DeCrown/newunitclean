import React, {useCallback, useEffect} from 'react';
import Content from "components/template/content";
import styled from "styled-components";
import Info from "components/product/info";
import Images from "components/product/images";
import OtherProducts from "components/product/otherProducts";
import Banner from "components/shared/duplicateComponents/banner";
import {isMobile} from "src/utils/isMobile";
import {H1} from "components/shared/fonts/specialFonts";
import ImagesMobile from "components/product/imagesMobile";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {GetProduct} from "src/actions/ProductAction/ProductAction";
import {IStateProduct} from "src/reducers/ProductReducer/ProductReducer.types";
import {BASE_URL} from "src/utils/constants";

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

const ProductHeader = styled(H1)`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
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

    let images:string[] = [];
    if (productState.product.image) {
        images.push(BASE_URL + productState.product.image);
    }
    if (productState.product.images) {
        productState.product.images.map(image => {
            images.push(BASE_URL + image);
        });
    }

    return (
        <Content>
            { isMobile() ? <ProductHeader>{productState.product.title}</ProductHeader> : ''}

            <Container>
                { isMobile() ?
                    <ImagesMobile images={images}></ImagesMobile>
                    :
                    <Images images={images}></Images> }
                <Info data={productState.product}></Info>
            </Container>

            <OtherProducts self={productState.product.id}></OtherProducts>

            { isMobile() ? null :
                <MonthTrendContainer>
                    <Banner header={'Хит продаж'} text={'В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!'}></Banner>
                </MonthTrendContainer>
            }
        </Content>
    );
};

export default Product;