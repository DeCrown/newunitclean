import React from "react";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {useCallback, useEffect} from "react";
import {GetPriceList} from "src/actions/PriceListAction/PriceListAction";
import styled from "styled-components";
import Product from "components/excel/product";
import Category from "components/excel/category";
import Header from "components/excel/header";
import Info from "components/excel/info";
import {IStatePriceList} from "src/reducers/PriceListReducer/PriceListReducer.types";
import TableToExcel from "components/excel/api/tableToExcel";

const TableStyle = styled.table`
  display: none;
  //color: #000;
`;

const Widths:any = {
    id: 5,
    "Название": 20,
    "Аналог Грасс": 20,
    "Описание": 40,
    "Разведение": 20,
    "Моек на 1 литр": 20,
    "Фасовка": 35,
    "Цена": 15,
    "Цена с НДС": 15,
    "Цена для оплаты с ИП": 15,
    "Цена для физ.лица": 15,
}

export const Table = () => {

    const PriceList = useTypedSelector((store) => store.PriceList);
    const {data, headers, isFetching, error} = PriceList as IStatePriceList;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetPriceList());
    }, []);

    return (
        <TableStyle id={'PriceList'} data-cols-width={headers.map(header => Widths[header]).join(',')}>
            <Info cols={headers.length} address={'Адрес: г. Москва, ул. 3-я Ямского поля,  д. 2, корп. 26 тел. +7 (495)151-37-51'} />
            <Header order={headers} />
            {
                Object.keys(data).map((category, i) =>
                    [
                        <Category cols={headers.length} key={i}>{category}</Category>,
                        (data[category] as any[]).map((product, j) => <Product key={j} data={product} />)
                    ]
                )
            }
        </TableStyle>
    )
}

export const GetTable = () => {
    TableToExcel.convert(document.getElementById('PriceList'), {
        name: "PriceList_UnitClean.xlsx",
        sheet: {
            name: "PriceList"
        }
    });
}