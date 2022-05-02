import React from 'react';
import styled from "styled-components";

const ReasonStyle = styled.div`
  width: 270px;
  height: 280px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 10px;
  filter: drop-shadow(1px 3px 3px rgba(0, 0, 0, 0.5));
  padding: 20px;
  display: grid;
  grid-template-rows: 60%;
  justify-items: center;
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  text-align: left;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Reason = (props: {icon: string; text: string }) => {
    return (
        <ReasonStyle>
            <Image src={props.icon} />
            <Text>{props.text}</Text>
        </ReasonStyle>
    );
};

export default Reason;