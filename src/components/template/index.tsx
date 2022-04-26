import React from 'react';
import styled from "styled-components";

import Header from "./header";
import Feedback from "./feedback";
import Footer from "./footer";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 316px);
  background: linear-gradient(180deg, rgba(54, 81, 109, 0.47) 0px, rgba(255, 255, 255, 0) 668px, rgba(255, 255, 255, 0) calc(100% - 1075px),  rgb(54, 81, 109) 100%);
  z-index: -1;
  
  .mobile & {
    background: linear-gradient(180deg, rgba(54, 81, 109, 0.47) 0px, rgba(255, 255, 255, 0) 668px, rgba(255, 255, 255, 0) calc(100% - 1075px),  rgba(103, 130, 158, 1) 100%);
  }
`;

const ClearBackground = styled(Background)`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) calc(100% - 1075px), rgb(54, 81, 109) 100%) !important;
`;

const FooterContainer = styled.div`
  background: #00000082;
  
  .mobile & {
    background: none;
  }
`;

const Template = (props: {children: JSX.Element; clearBackground?: boolean}) => {
    return (
        <div>
            { props.clearBackground ? <ClearBackground></ClearBackground> : <Background></Background>}
            <Header></Header>
            {props.children}
            <FooterContainer>
                <Feedback></Feedback>
                <Footer></Footer>
            </FooterContainer>
        </div>
    );
};

export default Template;