import React from 'react';
import {H1} from "components/shared/fonts/specialFonts";
import Content from "components/template/content";
import {CompanyInfo} from "components/lk/companyInfo";
import styled from "styled-components";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import CompanyPreviousOrders from "components/lk/companyPreviousOrders";
import {URLs} from "src/utils/constants";
import {isMobile} from "src/utils/isMobile";

const CompanyButtons = styled.div`
  padding: 58px 0 0 0;
  display: grid;
  justify-content: right;
`;

const ToLkButton = styled(DIV_BUTTON_WHITE_STYLE)`
  width: min-content;

  .mobile & {
    width: 100%;
  }
`;

const CompanyLk = () => {
    const toLk = () => {
        window.open(URLs.LK, '_self');
    }

    return (
        <Content>
            <H1>Личный кабинет компании</H1>

            <CompanyInfo></CompanyInfo>

            {
                isMobile() ?
                    <ButtonBlue styled={ToLkButton} func={toLk}>Личный кабинет</ButtonBlue>
                    :
                    <CompanyButtons>
                        <ButtonBlue styled={ToLkButton} func={toLk}>Личный кабинет</ButtonBlue>
                    </CompanyButtons>
            }

            <CompanyPreviousOrders></CompanyPreviousOrders>
        </Content>
    );
};

export default CompanyLk;