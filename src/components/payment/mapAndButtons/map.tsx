import React from 'react';
import styled from "styled-components";
import {H3} from "components/shared/fonts/specialFonts";
import InfoRow from "components/contacts/info/infoRow";
import {CONTACT_MAP, INFO} from "src/utils/constants";

const MapStyle = styled.div`
  width: 100%;
  height: 100%;
  
  .mobile & {
    margin-bottom: 80px;
  }
`;

const FrameStyle = styled.div`
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.1);
`;

const Address = styled.div`
  background: white;
  padding: 20px;
  width: calc(100% - 40px);
`;

const Map = () => {
    return (
        <MapStyle>
            <H3>Самовывоз</H3>
            <FrameStyle>
                <CONTACT_MAP height={'220px'} width={'100%'} />
                <Address>
                    <InfoRow title={'Адрес'} value={INFO.ADDRESS}></InfoRow>
                </Address>
            </FrameStyle>
        </MapStyle>
    );
};

export default Map;