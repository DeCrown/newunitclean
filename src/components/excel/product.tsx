import React from 'react';

const CellStyleTemp = (props: { children?: any; count: any; bold?: boolean; wrap?: boolean; num?: boolean; }) => {
    return <td data-b-t-s={'medium'} data-b-l-s={'medium'} data-b-r-s={'medium'} data-b-b-s={props.count > 1 ? null : 'medium'} data-a-h={'center'} data-a-v={'middle'} data-f-sz={'10'} data-f-name={'Times New Roman'} data-t={props.num ? 'n' : 's'} data-a-wrap={props.wrap} data-f-bold={props.bold}>{props.children}</td>
}

const CellStyleEmpty = (props: { children?: any; count: any } ) => {
    return <td data-b-l-s={'medium'} data-b-b-s={'medium'} rowSpan={props.count - 1}></td>
}
const CellStyleIterable = (props: { children?: any; count: any }) => {
    return <td data-b-a-s={'medium'} data-a-h={'center'} data-a-v={'middle'} data-f-sz={'10'} data-f-name={'Times New Roman'}>{props.children}</td>
}
const CellStyleNum = (props: { children?: any; count: any }) => {
    return <CellStyleTemp count={props.count} children={props.children} num={true}></CellStyleTemp>
}
const CellStyleTitle = (props: { children?: any; count: any }) => {
    return <CellStyleTemp count={props.count} children={props.children} bold={true} wrap={true}></CellStyleTemp>
}
const CellStyleAnalog = (props: { children?: any; count: any }) => {
    return <CellStyleTemp count={props.count} children={props.children} wrap={true}></CellStyleTemp>
}
const CellStyleDescription = (props: { children?: any; count: any }) => {
    return <td data-b-t-s={'medium'} data-b-l-s={'medium'} data-b-r-s={'medium'} data-b-b-s={props.count > 1 ? null : 'medium'} data-a-v={'top'} data-a-wrap={true} data-f-sz={'10'} data-f-name={'Times New Roman'}>{props.children}</td>
}

const CellStylesRow1:any = {
    id: CellStyleNum,
    "Название": CellStyleTitle,
    "Аналог Грасс": CellStyleAnalog,
    "Описание": CellStyleDescription,
    "Разведение": CellStyleAnalog,
    "Фасовка": CellStyleIterable,
    "Моек на 1 литр": CellStyleTemp,
    "Цена": CellStyleIterable,
    "Цена с НДС": CellStyleIterable,
    "Цена для оплаты с ИП": CellStyleIterable,
    "Цена для физ.лица": CellStyleIterable,
};

const CellStylesRow2:any = {
    id: CellStyleEmpty,
    "Название": CellStyleEmpty,
    "Аналог Грасс": CellStyleEmpty,
    "Описание": CellStyleEmpty,
    "Разведение": CellStyleEmpty,
    "Фасовка": CellStyleIterable,
    "Моек на 1 литр": CellStyleEmpty,
    "Цена": CellStyleIterable,
    "Цена с НДС": CellStyleIterable,
    "Цена для оплаты с ИП": CellStyleIterable,
    "Цена для физ.лица": CellStyleIterable,
};

const CellStylesRowMore:any = {
    id: null,
    "Название": null,
    "Аналог Грасс": null,
    "Описание": null,
    "Разведение": null,
    "Фасовка": CellStyleIterable,
    "Моек на 1 литр": null,
    "Цена": CellStyleIterable,
    "Цена с НДС": CellStyleIterable,
    "Цена для оплаты с ИП": CellStyleIterable,
    "Цена для физ.лица": CellStyleIterable,
};

const TYPE:string[] = [];

const Product = (props: {data: any}) => {

    const count = props.data["Фасовка"].length;

    return (
        <tbody>
            <tr>
                {Object.keys(props.data).map((key, i) => {
                    const Style = CellStylesRow1[key] || CellStyleTemp;
                    if (props.data[key] !== null && typeof props.data[key] === typeof TYPE) {
                        return <Style count={count} key={i}>{props.data[key][0]}</Style>
                    }
                    else {
                        return <Style count={count} key={i}>{props.data[key]}</Style>
                    }
                })}
            </tr>
            {
                count > 1 ?
                    <tr>
                        {
                            Object.keys(props.data).map((key, i) => {
                                const Style = CellStylesRow2[key] || CellStyleTemp;
                                if (props.data[key] !== null && typeof props.data[key] == typeof TYPE) {
                                    return <Style count={count} key={i}>{props.data[key][1]}</Style>
                                } else {
                                    return <Style count={count} key={i}>{props.data[key]}</Style>
                                }
                            })
                        }
                    </tr>
                    :
                    null
            }
            {  (props.data["Фасовка"] as string[]).slice(2).map((element, j) =>
                <tr key={j}>
                    {
                        Object.keys(props.data).map((key, i) => {
                            const Style = CellStylesRowMore[key];
                            if (props.data[key] !== null && typeof props.data[key] == typeof TYPE) {
                                if (Style) {
                                    return <Style count={count} key={i}>{props.data[key][j + 2]}</Style>
                                }
                            } else {
                                if (Style) {
                                    return <Style count={count} key={i}>{props.data[key]}</Style>
                                }
                            }
                        })
                    }</tr>) }
        </tbody>
    );
};

export default Product;