import React from 'react';

import TabsMenu from "components/shared/tabsMenu";
import {Api} from "src/api";
import {H1} from "components/shared/fonts/specialFonts";
import Tab from "components/catalog/tab";
import Content from "components/template/content";

const Catalog = () => {

    const categories = Api.Catalog.get();
    const tabs = [
        {
            title: 'Все товары',
            content: <div>
                {categories.map((category, i) => <Tab key={i} products={category.products} title={category.category}></Tab>)}
            </div>
        }
    ];
    categories.map(category => {tabs.push(
        {
            title: category.category,
            content: <Tab products={category.products} title={category.category}></Tab>
        }
    )});

    return (
        <Content>
            <H1>Каталог</H1>

            <TabsMenu tabs={tabs}></TabsMenu>
        </Content>
    );
};

export default Catalog;