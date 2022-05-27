import React from 'react';
import styled from "styled-components";

const LinkStyle = styled.div``;

const Link = (props: {image: string; url: string; height: string}) => {
    return (
        <LinkStyle>
            <a href={props.url}>
                <img height={props.height} src={props.image} />
            </a>
        </LinkStyle>
    );
};

export default Link;