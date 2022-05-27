import React from 'react';
import styled from "styled-components";

const SaveIconStyle = styled.svg`
  opacity: 0.3;
`;

const SaveIconLineStyle = styled.line`
  stroke: #000;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-width:2px;
`;

const SaveIcon = () => {
    return (
        <SaveIconStyle width={15} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g>
                <SaveIconLineStyle x1="3" x2="12" y1="16" y2="25"/>
                <SaveIconLineStyle x1="12" x2="29" y1="25" y2="7"/>
            </g>
        </SaveIconStyle>
    );
};

export default SaveIcon;