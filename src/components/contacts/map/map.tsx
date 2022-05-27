import React from 'react';
import styled from "styled-components";
import {CONTACT_MAP} from "src/utils/constants";

const MapStyle = styled.div`
  & iframe {
    width: 570px;
    height: 302px;
  }
  
  .mobile & {
    width: 100%;
    
    & iframe {
      width: 100%;
    }
  }
`;

const Map = () => {
    return (
        <MapStyle>
            <CONTACT_MAP />
        </MapStyle>
    );
};

export default Map;