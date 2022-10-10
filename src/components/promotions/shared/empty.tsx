import React from 'react';
import styled from "styled-components";

const Text = styled.div`
  margin-bottom: 100px;
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.font.color.light_gray};
`

const Empty = () => {
    return (
        <div>
            <Text>В настоящий момент акций не проводится</Text>
        </div>
    );
};

export default Empty;