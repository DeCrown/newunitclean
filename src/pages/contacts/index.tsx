import React from 'react';
import Info from "components/contacts/info/info";
import Map from "components/contacts/map/map";
import Content from "components/template/content";
import styled from "styled-components";
import {H1} from "components/shared/fonts/specialFonts";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 65px 0 142px 0;
  grid-gap: 16px; gap: 16px;
  
  .mobile & {
    margin: 20px 0 60px 0;
    justify-content: start;
    grid-gap: 55px; gap: 55px;
  }
`;

const Contacts = () => {
    return (
        <Content>
            <H1>Контакты</H1>

            <Container>
                <Info></Info>
                <Map></Map>
            </Container>
        </Content>
    );
};

export default Contacts;