import React from 'react';
import styled from "styled-components";

const Text = styled.div`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.font.color.light_gray};
`

const EmptyBasket = (props: {children: string}) => {
    return (
        <div>
            <Text>{props.children}</Text>
        </div>
    );
};

export default EmptyBasket;