import React from 'react';
import {H1} from "components/shared/fonts/specialFonts";
import {ProductType} from "src/utils/types";
import styled from "styled-components";
import InfoRow from "./infoRow";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import RadioButtons from "components/shared/forms/Button/radioButtons";
import {isMobile} from "react-device-detect";

const InfoStyle = styled.div`
  display: grid;
  justify-items: start;
  align-content: start;
  
  .mobile & {
    grid-template-columns: 100%;
  }
`;

const Header = styled(H1)`
  padding: 0;
  text-align: left;
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.font.size[32]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.font.color.blue};
  padding: 12px 0;
`;

const Description = styled.div`
  width: 100%;
  position: relative;
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  height: 50px;
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  width: min-content;
  padding: 0 42px;
  
  .mobile & {
    height: 60px;
    width: 100%;
  }
`;

const Info = (props: {data: ProductType}) => {
    console.log(props.data);
    return (
        <InfoStyle>
            { isMobile ? '' : <Header>{props.data.title}</Header>}

            <Price>{props.data.price.toLocaleString()} РУБ</Price>
            <Description>
                {typeof props.data.description == "string" ? '' : props.data.description.map((row, i) =>
                    <InfoRow key={i} title={row.header}>
                        {typeof row.text == "string" ? row.text : <RadioButtons buttons={row.text}></RadioButtons>}
                    </InfoRow>)}
            </Description>
            <ButtonBlue styled={ButtonStyle}>Купить за {props.data.price} ₽</ButtonBlue>
        </InfoStyle>
    );
};

export default Info;