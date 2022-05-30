import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import React, {useCallback, useEffect} from "react";
import {InfoPhoto, InfoPhotoContainer, InfoStyle} from "components/lk/info";
import {icons} from "src/utils/icons";
import {EditRow, EditRows} from "components/shared/info/editRow";
import {IStateCompany} from "src/reducers/CompanyReducer/CompanyReducer.types";
import {GetCompany, PatchCompany} from "src/actions/CompanyAction/CompanyAction";
import {PatchEmployee} from "src/actions/EmployeeAction/EmployeeAction";

export const CompanyInfo = () => {
    const Company = useTypedSelector((store) => store.Company);
    const {company} = Company as IStateCompany;

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetCompany());
    }, []);

    return (
        <InfoStyle>
            <InfoPhotoContainer><InfoPhoto src={company.logo ? company.logo : icons.avatar} /></InfoPhotoContainer>
            <EditRows>
                <EditRow save={(val) => stableDispatch(PatchCompany({title: val}))} value={company.title}></EditRow>
                <EditRow save={(val) => stableDispatch(PatchCompany({phone_number: val}))} title={'Телефон'} value={company.phone_number}></EditRow>
                <EditRow save={(val) => stableDispatch(PatchCompany({official_address: val}))} title={'Юр. адрес'} value={company.official_address}></EditRow>
                <EditRow save={(val) => stableDispatch(PatchCompany({inn: val}))} title={'ИНН'} value={company.inn}></EditRow>
                <EditRow save={(val) => stableDispatch(PatchCompany({kpp: val}))} title={'КПП'} value={company.kpp}></EditRow>
            </EditRows>
        </InfoStyle>
    );
};