import React from 'react';
import styled from "styled-components";

const INPUT_TEXT_STYLE = styled.input`
    border: none;
    height: 47px;
    background: #FFFFFF;
    border-radius: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000;
    padding: 0 20px;
    width: calc(100% - 40px);
`

const INPUT_TEXT = (props: {placeholder?: string}) => {
    return (
        <INPUT_TEXT_STYLE type='text' placeholder={props.placeholder} />
    );
};

export default INPUT_TEXT;