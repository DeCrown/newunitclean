import React from 'react';
import {isMobile} from "react-device-detect";
import ProductsBrowser from "components/main/products/productsBrowser";
import ProductsMobile from "components/main/products/productsMobile";

const Products = () => {
    if (isMobile) {
        return (
            <ProductsMobile></ProductsMobile>
        )
    }
    else {
        return (
            <ProductsBrowser></ProductsBrowser>
        )
    }
};

export default Products;