import React from 'react';
import styled from "styled-components";
import {Main} from "src/themes/main";
import {isMobile} from "react-device-detect";
import {useTypedSelector} from "src/store/configureStore";
import {IStateTabsMenu} from "src/reducers/TabsMenuReducer/TabsMenuReducer.types";

const TabStyle = styled.div`
  position: relative;
  transition: left 0.3s;
  
  &.hidden {
    height: 0;
    overflow: hidden;
  }
`

const Tab = (props: {children: any, self: number}) => {

    const TabsMenu = useTypedSelector((store) => store.TabsMenu);
    const {pos} = TabsMenu as IStateTabsMenu;
    const margin = isMobile ? Main.values.contentMobileMargin : Main.values.contentMargin;

    return (
        <TabStyle className={props.self == pos ? '' : 'hidden'} style={{ left: 'calc(-100% * ' + pos + ' + ' + margin + 'px * ' + (props.self - pos) + ')' }}>
            {props.children}
        </TabStyle>
    )
};



const TabsStyle = styled.div<{height: string}>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  height: ${props => props.height};
`;

const Tabs = (props: {tabs: any[]}) => {

    return (
        <TabsStyle height={'auto'}>
            { props.tabs.map((tab, i) => <Tab key={i} self={i}>{tab}</Tab>) }
        </TabsStyle>
    );
};

export default Tabs;