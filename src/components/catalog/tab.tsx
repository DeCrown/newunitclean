import React from 'react';
import TabContent from "components/shared/tabsMenu/tabContent";
import ProductsList from "components/shared/productsList";
import {ProductType} from "src/utils/types";
import styled from "styled-components";
import EmptyBasket from "components/shared/productsList/empty";

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size[28]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  color: ${({ theme }) => theme.font.color.gray};
  text-align: center;
  margin: 0px;
  
  .mobile & {
    text-align: left;
  }
`;

const Tab = (props: {title: string; products: ProductType[]}) => {

    return (
        props.products.length
            ?
            <TabContent>
                <Title>{props.title}</Title>
                <ProductsList products={props.products}></ProductsList>
            </TabContent>
            :
            <TabContent>
                <Title>{props.title}</Title>
                <EmptyBasket>Товаров в данной категории пока нет</EmptyBasket>
            </TabContent>
    );
};

export default Tab;