import React from 'react';
import styled from "styled-components";

import Header from "./header";
import Feedback from "./feedback";
import Footer from "./footer";
import {FooterContainerBackground} from "components/template/backgrounds/footerContainerBackground";
import {getAuth} from "src/store/localStorage";
import {URLs} from "src/utils/constants";
import Unauthorized from "src/pages/special/unauthorized";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  //height: calc(100% - 316px);
  height: 100%;
  background: linear-gradient(180deg, 
  rgba(54, 81, 109, 0.47) 0px, 
  rgba(255, 255, 255, 0) 668px, 
  rgba(255, 255, 255, 0) calc(100% - 1391px),  
  rgb(54, 81, 109) 100%);
  z-index: -1;
  
  .mobile & {
    background: linear-gradient(180deg, #36516D 0%, 
    rgba(255, 255, 255, 0) 668px, 
    rgba(255, 255, 255, 0) calc(100% - 1075px),  
    rgba(103, 130, 158, 1) 100%);
  }
`;

const ClearBackground = styled(Background)`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0px, 
  rgba(255, 255, 255, 0) calc(100% - 1391px), 
  rgb(54, 81, 109) 100%) !important;
`;

const FooterContainer = styled.div`
  .mobile & {
    background: none;
  }
`;

const Template = (props: {children: any; clearBackground?: boolean; auth?: boolean}) => {
    return (
        <div>
            <Header clearBackground={props.clearBackground}></Header>
            {
                props.auth && !getAuth().isAuthorized ?
                    <Unauthorized></Unauthorized>
                    :
                    props.children
            }
            <FooterContainer>
                <FooterContainerBackground/>
                <Feedback></Feedback>
                <Footer></Footer>
            </FooterContainer>
        </div>
    );
};

export default Template;