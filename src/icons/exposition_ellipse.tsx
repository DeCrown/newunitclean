import React from 'react';
import {StyledComponent} from "styled-components";

const ExpositionEllipse = (props: {styled: StyledComponent<any, any>; background?: string}) => {
    return (
        <props.styled background={props.background} width="479" height="466" viewBox="0 0 479 466" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="239.716" cy="232.993" rx="239.284" ry="232.993"/>
        </props.styled>
    );
};

export default ExpositionEllipse;