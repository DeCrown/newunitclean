import React from 'react';

const Category = (props: {children: string; cols: number}) => {
    return (
        <tbody>
        <tr data-height="30">
            <td data-b-t-s={'medium'}
                data-b-b-s={'medium'}
                data-b-l-s={'medium'}
                data-f-name={'Times New Roman'}
                data-f-sz={'12'}
                data-f-bold={true}
                data-fill-color={'0000B0F0'}
                data-a-h={'center'}
                data-a-v={'middle'}
                colSpan={props.cols}>{props.children}</td>
        </tr>
        </tbody>
    );
};

export default Category;