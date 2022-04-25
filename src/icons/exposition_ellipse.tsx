import React from 'react';

const ExpositionEllipse = (props: {class: string, style: any}) => {
    return (
        <svg className={props.class} style={props.style} width="479" height="466" viewBox="0 0 479 466" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="239.716" cy="232.993" rx="239.284" ry="232.993"/>
        </svg>
    );
};

export default ExpositionEllipse;