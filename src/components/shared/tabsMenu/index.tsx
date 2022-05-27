import React from 'react';
import Tabs from "./tabs";
import TabsButtons from "./tabsButtons";

interface Tab {
    title: string;
    content: any;
}

const TabsMenu:React.FC<{tabs: Tab[]}> = (props: {tabs: Tab[]}) => {
    return (
        <div>
            <TabsButtons titles={props.tabs.map((tab) => tab.title)}></TabsButtons>
            <Tabs tabs={props.tabs.map((tab) => tab.content)}></Tabs>
        </div>
    );
};

export default TabsMenu;