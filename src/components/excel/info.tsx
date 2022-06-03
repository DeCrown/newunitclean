import React from 'react';
import logo from 'src/logo/logo.png'

const Info = (props: {address: string; cols: number}) => {
    return (
        <thead>
            <tr>
                <th colSpan={2} rowSpan={4}
                    data-f-name={'Impact'}
                    data-f-sz={'24'}
                    data-f-bold={true}
                    data-a-h={'center'} data-a-v={'middle'}>
                    <img id={'PriceListIcon'} src={logo} />
                </th>
                <th colSpan={props.cols - 2}
                    data-f-name={'Times New Roman'}
                    data-f-sz={'10'}
                    data-f-bold={true}>
                    {props.address}
                </th>
            </tr>
            <tr data-height="40">
                <th colSpan={props.cols - 2}
                    data-f-color={'00FF0000'}
                    data-f-name={'Times New Roman'}
                    data-f-sz={'12'}
                    data-f-bold={true}>
                    Специальное предложение для новых клиентов - сервисных центров и моек автотранспорта.
                </th>
            </tr>
            <tr data-height="40">
                <th colSpan={props.cols - 2}
                    data-f-name={'Times New Roman'}
                    data-f-sz={'12'}
                    data-f-bold={true}
                    data-a-v={'top'}>
                    Действует с 11 мая 2022 г.
                </th>
            </tr>
            <tr data-height="40">
                <th colSpan={props.cols - 2}
                    data-f-name={'Times New Roman'}
                    data-f-sz={'12'}
                    data-a-v={'middle'}>
                    По согласованию сторон, возможен налив продуктов автохимии в тару клиента.
                </th>
            </tr>
        </thead>
    );
};

export default Info;