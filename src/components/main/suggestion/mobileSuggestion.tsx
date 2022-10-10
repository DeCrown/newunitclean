import React from 'react';
import styled from "styled-components";
import {SuggestionType} from "src/utils/types";
import {BASE_URL} from "src/utils/constants";

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
  background: rgba(199, 216, 234, 0.7);
  border-radius: 10px 0px 0px 10px;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  padding: 28px;
  margin-right: -${({ theme }) => theme.values.contentMobileMargin}px;
  position: absolute;
  bottom: 24%;
  right: 0px;
  width: calc(100% - 40px);
`;

const HeaderNoImage = styled(Header)`
  background: rgba(199, 216, 234);
  bottom: -60px;
`;

const MobileSuggestion = (props: SuggestionType) => {
    return (
        <SuggestionStyle>
            <Title>{props.title}</Title>
            <Image src={props.product.image && props.product.image.length ? BASE_URL + props.product.image[0] : ''} />
            {
                props.product.image && props.product.image.length ?
                    <Header>Химические средства для клининга</Header>
                    :
                    <HeaderNoImage>Химические средства для клининга</HeaderNoImage>
            }
        </SuggestionStyle>
    );
};

export default MobileSuggestion;