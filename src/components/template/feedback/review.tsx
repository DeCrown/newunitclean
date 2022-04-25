import React from 'react';
import styled from "styled-components";

const ReviewStyle = styled.div`
  display: grid;
  grid-gap: 15px;
  position: relative;
  transition: left 0.3s;
`;

const ReviewPhoto = styled.div`
  position: relative;
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
            <ReviewPhoto><img src={props.photo} /></ReviewPhoto>
            <ReviewText>{props.text}</ReviewText>
            <ReviewSign>{props.name}, {props.role}</ReviewSign>
        </ReviewStyle>
    );
};

export default Review;