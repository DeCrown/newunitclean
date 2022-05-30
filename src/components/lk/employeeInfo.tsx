import {useTypedSelector} from "src/store/configureStore";
import {IStateEmployee} from "src/reducers/EmployeeReducer/EmployeeReducer.types";
import {useDispatch} from "react-redux";
import React, {useCallback, useEffect} from "react";
import {GetEmployee, PatchEmployee} from "src/actions/EmployeeAction/EmployeeAction";
import {icons} from "src/utils/icons";
import {EditRow, EditRows} from "components/shared/info/editRow";
import {InfoPhoto, InfoPhotoContainer, InfoStyle} from "components/lk/info";

export const EmployeeInfo = () => {
    const Employee = useTypedSelector((store) => store.Employee);
    const {employee} = Employee as IStateEmployee;

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetEmployee());
    }, []);

    return (
        <InfoStyle>
            <InfoPhotoContainer><InfoPhoto src={employee.avatar ? employee.avatar : icons.avatar} /></InfoPhotoContainer>
            <EditRows>
                <EditRow save={(val) => stableDispatch(PatchEmployee({full_name: val}))} value={employee.full_name}></EditRow>
                <EditRow title={'E-mail'} value={employee.email} nonEditable={true}></EditRow>
                <EditRow save={(val) => stableDispatch(PatchEmployee({phone_number: val}))} title={'Телефон'} value={employee.phone_number}></EditRow>
                <EditRow save={(val) => stableDispatch(PatchEmployee({address: val}))} title={'Адрес'} value={employee.address}></EditRow>
            </EditRows>
        </InfoStyle>
    );
};