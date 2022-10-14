import React from 'react';
import styled from "styled-components";

const ReviewStyle = styled.div`
  display: grid;
  grid-gap: 15px; gap: 15px;
  position: relative;
  transition: left 0.3s;
  justify-items: center;
`;

const ReviewPhoto = styled.div<{src: string}>`
  position: relative;
  background-image: url(${props => props.src});
  height: 106px;
  width: 106px;
  background-size: cover;
  border-radius: 50%;
  background-repeat: no-repeat;
`;

const ReviewText = styled.div`
  color: ${({ theme }) => theme.font.color.black};
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  margin: 0 46px;
  max-height: 100px;
  overflow: hidden;
`;

const ReviewSign = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  text-align: center;
  color: #0008;
`;

const Review = (props: {pos: number, photo: string; text: string; name: string; role: string}) => {
    return (
        <ReviewStyle style={{left: -100 * props.pos + '%'}}>
            <ReviewPhoto src={props.photo} />
            <ReviewText>{props.text}</ReviewText>
            <ReviewSign>{props.name}, {props.role}</ReviewSign>
        </ReviewStyle>
    );
};

export default Review;