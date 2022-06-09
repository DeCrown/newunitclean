import React from 'react';
import Reviews from "./reviews";
import styled from "styled-components";
import OrderCall from "components/template/feedback/orderCall";
import {FeedbackBackground} from "components/template/backgrounds/feedbackBackground";
import {isMobile} from "src/utils/isMobile";

const FeedbackContainer = styled.div`
  position: relative;
`;

const FeedbackStyle = styled.div`
    height: 712px;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
`;

const ReviewsContainer = styled.div`
    display: grid;
    margin: 140px 0;
`;

const ReviewsHeader = styled.div`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[800]};
  color: ${({ theme }) => theme.font.color.black};
  margin-bottom: 60px;
`;

const Feedback = () => {
    return (
        <FeedbackContainer id={"feedback"}>
            <FeedbackBackground></FeedbackBackground>
            {isMobile() ?
                <div>
                    <ReviewsHeader>Отзывы</ReviewsHeader>
                    <Reviews></Reviews>
                    <OrderCall></OrderCall>
                </div>
                :
                <FeedbackStyle>
                    <OrderCall></OrderCall>
                    <ReviewsContainer>
                        <Reviews></Reviews>
                    </ReviewsContainer>
                </FeedbackStyle>
            }
        </FeedbackContainer>
    );
};

export default Feedback;