import React from 'react';
import Map from "components/payment/mapAndButtons/map";
import Buttons from "components/payment/mapAndButtons/buttons";
import styled from "styled-components";

const MapAndButtonsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  grid-gap: 20px;
`;

const MapAndButtons = () => {
    return (
        <MapAndButtonsStyle>
            <Map></Map>
            <Buttons></Buttons>
        </MapAndButtonsStyle>
    );
};

export default MapAndButtons;