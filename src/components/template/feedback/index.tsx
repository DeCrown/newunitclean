import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import Reviews from "./reviews";
import styled from "styled-components";
import OrderCall from "components/template/feedback/orderCall";

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
        <div id={"feedback"}>
            <BrowserView>
                <FeedbackStyle>
                    <OrderCall></OrderCall>
                    <ReviewsContainer>
                        <Reviews></Reviews>
                    </ReviewsContainer>
                </FeedbackStyle>
            </BrowserView>
            <MobileView>
                <div>
                    <ReviewsHeader>Отзывы</ReviewsHeader>
                    <Reviews></Reviews>
                    <OrderCall></OrderCall>
                </div>
            </MobileView>
        </div>
    );
};

export default Feedback;