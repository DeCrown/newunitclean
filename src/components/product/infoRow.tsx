import React from 'react';
import styled from "styled-components";

const InfoRowStyle = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.font.color.black};
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[18]};
  }
`;

const Value = styled.div`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};

  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`;

const InfoRow = (props: {children: any; title: string}) => {
    return (
        <InfoRowStyle>
            <Title>{props.title}:</Title>
            <Value>{props.children}</Value>
        </InfoRowStyle>
    );
};

export default InfoRow;