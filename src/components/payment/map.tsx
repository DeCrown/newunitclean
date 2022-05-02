import React from 'react';
import styled from "styled-components";
import {H3} from "components/shared/fonts/specialFonts";
import InfoRow from "components/contacts/info/infoRow";
import {INFO} from "src/utils/constants";

const MapStyle = styled.div`
  grid-area: map;
  
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
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7127.6563509762045!2d37.61879521129864!3d55.757272203531606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a4a4f3077%3A0xa7583549db7aeb5e!2z0J_Qu9C-0YnQsNC00Ywg0KDQtdCy0L7Qu9GO0YbQuNC4!5e0!3m2!1sru!2sru!4v1651319102034!5m2!1sru!2sru"
                    width="100%" height="220px" style={{border:0}} allowFullScreen={true} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <Address>
                    <InfoRow title={'Адрес'} value={INFO.ADDRESS}></InfoRow>
                </Address>
            </FrameStyle>
        </MapStyle>
    );
};

export default Map;