import React from 'react';

import TabsMenu from "components/shared/tabsMenu";
import {Api} from "src/api";
import {H1} from "components/shared/fonts/headers";
import Tab from "components/catalog/tab";

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
        <div className={'content'}>
            <H1>Каталог</H1>

            <TabsMenu tabs={tabs}></TabsMenu>
        </div>
    );
};

export default Catalog;