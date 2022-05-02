import React from 'react';
import styled from "styled-components";

const TitleStyle = styled.div`
  position: relative;
  height: 50px;
  padding: 0 8px;
  max-width: calc(100% - 16px);
  display: grid;
  margin-bottom: 22px;
`;

const TitleBackground = styled.div`
  height: 0px;
  width: 100%;
  border-bottom: 50px solid ${({ theme }) => theme.backgrounds.promotion.title};
  border-left: 20px solid transparent;
  border-right: 0px solid transparent;
  position: absolute;
  right: 0;
  filter: drop-shadow(0px 4px 12px rgba(0,0,0,0.25));
`;

const TitleText = styled.div`
  font-weight: ${({ theme }) => theme.font.weight[800]};
  font-size: ${({ theme }) => theme.font.size[24]};

  text-align: right;
  white-space: nowrap;
  position: relative;
  align-self: center;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Title = (props: {val: string}) => {
    return (
        <TitleStyle>
            <TitleBackground></TitleBackground>
            <TitleText>{props.val}</TitleText>
        </TitleStyle>
    );
};

export default Title;