import React from 'react';
import Suggestion from "components/main/suggestion";
import WhyWe from "components/main/whywe/whywe";
import Content from "components/template/content";
import {Api} from "src/api";
import About from "components/main/about";
import Products from "components/main/products";

const Main = () => {
    const products = Api.Cart.all.get();

    return (
        <Content>
            <Suggestion title='Успей купить!' product={products[0]} discount={50} background={'#AB2B324D'}></Suggestion>
            <About></About>
            <WhyWe></WhyWe>
            <Products></Products>
            <div></div>
        </Content>
    );
};

export default Main;