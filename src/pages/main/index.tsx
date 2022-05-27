import React, {useCallback, useEffect} from 'react';
import Suggestion from "components/main/suggestion";
import WhyWe from "components/main/whywe/whywe";
import Content from "components/template/content";
import About from "components/main/about";
import Products from "components/main/products";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {IStateMainPage} from "src/reducers/MainPageReducer/MainPageReducer.types";
import {GetMainPage} from "src/actions/MainPageAction/MainPageAction";
import {Api} from "src/api";

const Main = () => {
    const MainPage = useTypedSelector((store) => store.MainPage);
    const {products, isFetching, error} = MainPage as IStateMainPage;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetMainPage());
    }, []);

    console.log(products);

    const products_ = Api.Cart.all.get();

    return (
        <Content>
            <Suggestion title='Успей купить!' product={products_[0]} discount={50} background={'#AB2B324D'}></Suggestion>
            <About></About>
            <WhyWe></WhyWe>
            <Products></Products>
            <div></div>
        </Content>
    );
};

export default Main;