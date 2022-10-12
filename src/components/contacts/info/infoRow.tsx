import React from 'react';
import styled from "styled-components";

const InfoRowStyle = styled.div`
  text-align: left;
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.font.color.black};
`;

const Value = styled.span`
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  user-select: text;
`;

const InfoRow = (props: {title: string; value: string}) => {
    return (
        <InfoRowStyle>
            <Title>{props.title}:</Title>
            <br></br>
            <Value>{props.value}</Value>
        </InfoRowStyle>
    );
};

export default InfoRow;