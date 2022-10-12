import {useDispatch} from "react-redux";
import React from "react";
import {PatchEmployee} from "src/actions/EmployeeAction/EmployeeAction";
import {icons} from "src/utils/icons";
import {EditRow, EditRows} from "components/shared/info/editRow";
import {InfoPhoto, InfoPhotoContainer, InfoStyle} from "components/lk/info";
import {EmployeeType} from "src/utils/types";

export const EmployeeInfo = (props: {employee: EmployeeType}) => {
    const dispatch = useDispatch();

    return (
        <InfoStyle>
            <InfoPhotoContainer><InfoPhoto src={props.employee.avatar ? props.employee.avatar : icons.avatar} /></InfoPhotoContainer>
            <EditRows>
                <EditRow save={(val) => PatchEmployee({full_name: val})(dispatch)} value={props.employee.full_name}></EditRow>
                <EditRow title={'E-mail'} value={props.employee.email} nonEditable={true}></EditRow>
                <EditRow save={(val) => PatchEmployee({phone_number: val})(dispatch)} title={'Телефон'} value={props.employee.phone_number}></EditRow>
                <EditRow save={(val) => PatchEmployee({address: val})(dispatch)} title={'Адрес'} value={props.employee.address}></EditRow>
            </EditRows>
        </InfoStyle>
    );
};