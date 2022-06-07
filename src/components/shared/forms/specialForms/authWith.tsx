import React from 'react';
import {icons} from "src/utils/icons";
import styled from "styled-components";

const AuthWithStyle = styled.div``;

const AuthWithText = styled.div`
  font-size: ${({ theme }) => theme.font.size[12]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: #00000080;
  margin: 30px 0 18px 0;
`;

const Links = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 32px; gap: 32px;
  justify-content: center;
`;

const AuthWith = () => {
    return (
        <AuthWithStyle>
            <AuthWithText>Или войдите через</AuthWithText>
            <Links>
                <img src={icons.links.vk}></img>
                <img src={icons.links.facebook}></img>
                <img src={icons.links.google}></img>
            </Links>
        </AuthWithStyle>
    );
};

export default AuthWith;