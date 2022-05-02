import React from 'react';
import {icons} from "src/utils/icons";
import ExpositionEllipse from "src/icons/exposition_ellipse";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import {SuggestionType} from "components/main/suggestion/type";
import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const SuggestionStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 50% 50%;

  @media (max-width : 1460px) {
    & {
      grid-auto-flow: row;
      grid-template-rows: 50% 50%;
      grid-template-columns: none;
    }
  }
`;

const Exposition = styled.div`
  position: relative;
  display: grid;
  justify-content: end;
`;

const ExpositionEllipse1 = styled.svg<{background?: string}>`
  fill: ${props => props.background};
  position: absolute;
  right: 20px;
  top: 0px;
`;

const ExpositionEllipse2 = styled.svg<{background?: string}>`
  fill: ${props => props.background};
  margin: 50px 70px 0 0;
`;

const Image = styled.img`
  z-index: 1;
  position: relative;
  mix-blend-mode: normal;
  backdrop-filter: blur(4px);
  top: 100px;
  width: 100px;
  display: none;
`;

const Title = styled.h1`
  text-align: left;
  line-height: 100px;
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  font-size: ${({ theme }) => theme.font.size[100]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
`;

const Discount = styled.div`
  position: absolute;
  right: 0px;
  font-size: ${({ theme }) => theme.font.size[35]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  line-height: normal;

  & div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: grid;
    align-content: center;
  }
`;

const ButtonsStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[48]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  width: min-content;
  padding: 0 26px;
`;

const BrowserSuggestion = (props: SuggestionType) => {
    return (
        <SuggestionStyle>
            <div>
                <Title>{props.title}</Title>
                <ButtonBlue styled={ButtonsStyle}>КУПИТЬ</ButtonBlue>
            </div>
            <Exposition>
                <ExpositionEllipse styled={ExpositionEllipse1} background={props.background}></ExpositionEllipse>
                <ExpositionEllipse styled={ExpositionEllipse2} background={props.background}></ExpositionEllipse>
                <Image src={props.product.image[0]} />
                <Discount>
                    <img src={icons.discount}/>
                    <div>{props.discount}%<br/>off</div>
                </Discount>
            </Exposition>
        </SuggestionStyle>
    );
};

export default BrowserSuggestion;