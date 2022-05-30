import React, {useCallback, useEffect} from 'react';

import {H1} from "components/shared/fonts/specialFonts";
import Content from "components/template/content";
import Registration from "components/lk/registration";
import BuyHistory from "components/lk/buyHistory";
import {LogoutUser} from "src/actions/AuthAction/AuthAction";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {icons} from "src/utils/icons";
import {EmployeeInfo} from "components/lk/employeeInfo";
import {URLs} from "src/utils/constants";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {GetCompany} from "src/actions/CompanyAction/CompanyAction";
import {useTypedSelector} from "src/store/configureStore";
import {IStateCompany} from "src/reducers/CompanyReducer/CompanyReducer.types";
import {isMobile} from "react-device-detect";

const HeaderWithButton = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
`;

const ButtonExit = styled.img`
  width: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
  cursor: pointer;
  
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.4));
  }
`;

const LkButtons = styled.div`
  padding: 58px 0 0 0;
  display: grid;
  justify-content: right;
`;

const ToCompanyButton = styled(DIV_BUTTON_WHITE_STYLE)`
  width: min-content;
  
  .mobile & {
    width: 100%;
  }
`;

const Lk = () => {
    const Company = useTypedSelector((store) => store.Company);
    const {error} = Company as IStateCompany;

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetCompany());
    }, []);

    const logout = () => {
        stableDispatch(LogoutUser({
            successFunc: () => {
                window.open(URLs.ROOT, '_self');
            }
        }));
    }

    const toCompany = () => {
        window.open(URLs.COMPANY_LK, '_self');
    }

    const downloadPriceList = () => {
        /*downloadExcel({
            abc: 1,
            bcd: 2
        })*/
    }

    return (
        <Content>
            <HeaderWithButton>
                <H1>Личный кабинет</H1>
                <ButtonExit src={icons.exit} onClick={logout} />
            </HeaderWithButton>

            <EmployeeInfo></EmployeeInfo>

            {
                isMobile ?
                    <ButtonBlue styled={ToCompanyButton} func={downloadPriceList}>Скачать прайс-лист</ButtonBlue>
                    :
                    <LkButtons>
                        <ButtonBlue styled={ToCompanyButton} func={downloadPriceList}>Скачать прайс-лист</ButtonBlue>
                    </LkButtons>
            }

            {
                error
                    ?
                    <Registration></Registration>
                    :
                    isMobile ?
                        <ButtonBlue styled={ToCompanyButton} func={toCompany}>Личный кабинет компании</ButtonBlue>
                        :
                        <LkButtons>
                            <ButtonBlue styled={ToCompanyButton} func={toCompany}>Личный кабинет компании</ButtonBlue>
                        </LkButtons>
            }

            <BuyHistory></BuyHistory>
        </Content>
    );
};

export default Lk;