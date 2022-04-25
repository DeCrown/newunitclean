import React from 'react';

const Link = (props: {image: string; url: string}) => {
    return (
        <div>
            <a href={props.url}>
                <img src={props.image} />
            </a>
        </div>
    );
};

export default Link;