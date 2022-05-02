import React from 'react';
import {EditRow, EditRows} from "components/shared/info/editRow";
import styled from "styled-components";
import {Api} from "src/api";

const InfoStyle = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 20% 60%;
  justify-content: end;
  grid-gap: 56px;
  padding: 48px 0;

  .mobile & {
    border-bottom: none;
    grid-template-columns: unset;
  }
`;

const PhotoContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  align-self: center;
  
  .mobile & {
    width: 60%;
    height: 100%;
  }
`;

const Photo = styled.div<{src: string}>`
  background: url(${ props => props.src });
  margin-left: auto;
  margin-right: auto;
  padding-top: 50%;
  padding-bottom: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5));
`;

const Info = () => {
    const profile = Api.Lk.getProfile();

    return (
        <InfoStyle>
            <PhotoContainer><Photo src={profile.photo} /></PhotoContainer>
            <EditRows>
                <EditRow value={profile.name}></EditRow>
                <EditRow title={'E-mail'} value={profile.email} verified={true}></EditRow>
                <EditRow title={'Телефон'} value={profile.phoneNumber} verified={true}></EditRow>
                <EditRow title={'Адрес'} value={profile.address}></EditRow>
            </EditRows>
        </InfoStyle>
    );
};

export default Info;