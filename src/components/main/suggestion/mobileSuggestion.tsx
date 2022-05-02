import React from 'react';
import styled from "styled-components";
import {SuggestionType} from "components/main/suggestion/type";

const SuggestionStyle = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  text-align: left;
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  font-size: ${({ theme }) => theme.font.size[50]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
`;

const Header = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px 0px 0px 10px;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  padding: 28px;
  margin-right: -${({ theme }) => theme.values.contentMobileMargin}px;
  position: absolute;
  bottom: 50px;
  right: 0px;
`;

const MobileSuggestion = (props: SuggestionType) => {
    return (
        <SuggestionStyle>
            <Title>{props.title}</Title>
            <Image src={props.product.image[0]} />
            <Header>Химические средства для клининга</Header>
        </SuggestionStyle>
    );
};

export default MobileSuggestion;