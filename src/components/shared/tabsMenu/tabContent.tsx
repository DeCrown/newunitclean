import React from 'react';
import styled from "styled-components";

const TabContentStyle = styled.div`
  display: grid;
  grid-gap: 56px;
  margin-bottom: 70px;
`;

const TabContent = (props: {children: any}) => {
    return (
        <TabContentStyle>
            {props.children}
        </TabContentStyle>
    );
};

export default TabContent;