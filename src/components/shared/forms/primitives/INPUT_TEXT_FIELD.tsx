import React from 'react';
import styled from "styled-components";

const INPUT_TEXT_FIELD_STYLE = styled.textarea`
    resize: none;
    border: none;
    background: #FFFFFF;
    border-radius: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000;
    padding: 12px 20px;
    margin: 0;
    width: calc(100% - 40px);
`

const INPUT_TEXT_FIELD = (props: {placeholder?: string}) => {
    return (
        <INPUT_TEXT_FIELD_STYLE placeholder={props.placeholder}></INPUT_TEXT_FIELD_STYLE>
    );
};

export default INPUT_TEXT_FIELD;