import React from 'react';
import styled from "styled-components";

const InputCodeStyle = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 12px 3px rgba(0, 0, 0, 0.13);
  padding: 26px 214px;
  margin: 0 416px;
  display: grid;
  grid-gap: 20px; gap: 20px;
  
  .mobile & {
    padding: 35px 20px;
    margin: 0;
  }
`;

const InputCode = (props: {children: any}) => {
    return (
        <InputCodeStyle>{props.children}</InputCodeStyle>
    );
};

export default InputCode;