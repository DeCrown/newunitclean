import React from 'react';
import styled from "styled-components";
import {HEADER_STYLE} from "components/shared/fonts/specialFonts";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import ButtonBlue from "components/shared/forms/buttonBlue";

const BannerStyle = styled.div`
  height: 184px;
  background: #A5AFBA;
  display: flex;
  padding: 30px 75px 30px 150px;
  margin-top: 146px;
`;

const Info = styled.div`
  display: grid;
  align-content: space-between;
  justify-items: left;
  grid-gap: 20px;
`;

const Title = styled.div`
  ${HEADER_STYLE};
  font-size: ${({ theme }) => theme.font.size[32]};
  padding: 0;
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  text-align: left;
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  height: 40px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  width: 200px;
`;

const Image = styled.div`
  width: 500px;
  background: rgba(196, 196, 196, 0.23);
  align-self: end;
  flex-shrink: 0;
  height: 360px;
  display: grid;
  align-content: center;
  justify-items: center;
  
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Banner = (props: {header: string; text: string; image?: string}) => {
    return (
        <BannerStyle>
            <Info>
                <Title>{props.header}</Title>
                <Text>{props.text}</Text>
                <ButtonBlue styled={ButtonStyle}>Подробнее</ButtonBlue>
            </Info>
            <Image>
                <img src={props.image}></img>
            </Image>
        </BannerStyle>
    );
};

export default Banner;