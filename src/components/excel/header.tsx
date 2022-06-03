import React from 'react';

const HeaderStyleNum = (props: {children?: any}) => {
    return <HeaderStyleType1>№</HeaderStyleType1>;
}
const HeaderStyleType1 = (props: {children: any}) => {
    return <td data-b-a-s={'medium'} data-f-bold={true} data-a-wrap={true} data-a-h={'center'} data-a-v={'middle'} data-f-sz={'12'} data-f-name={'Times New Roman'}>{props.children}</td>;
}
const HeaderStyleType2 = (props: {children: any}) => {
    return <td data-b-a-s={'medium'} data-f-bold={true} data-a-wrap={true} data-a-h={'left'} data-a-v={'middle'} data-f-sz={'12'} data-f-name={'Times New Roman'}>{props.children}</td>;
}

const HeaderStyles:any = {
    id: HeaderStyleNum,
    "Название": HeaderStyleType1,
    "Аналог Грасс": HeaderStyleType1,
    "Описание": HeaderStyleType1,
    "Разведение": HeaderStyleType1,
    "Фасовка": HeaderStyleType1,
    "Моек на 1 литр": HeaderStyleType2,
    "Цена": HeaderStyleType1,
    "Цена с НДС": HeaderStyleType2,
    "Цена для оплаты с ИП": HeaderStyleType2,
    "Цена для физ.лица": HeaderStyleType2,
};

const Header = (props: {order: string[]}) => {
    return (
        <tbody>
            <tr>
                {props.order.map((header, i) => {
                    const Style = HeaderStyles[header] || HeaderStyleType1;
                    return <Style key={i}>{header}</Style>
                })}
            </tr>
        </tbody>
    );
};

export default Header;