import React, {useEffect, useState} from 'react';
import Review from "./review";
import {icons} from "src/utils/icons";
import {Api} from "src/api";
import styled, {css} from "styled-components";
import {isMobile, BrowserView, MobileView} from "react-device-detect";
import ButtonBlue from "components/shared/forms/Button/buttonBlue";
import {DIV_BUTTON_WHITE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const ReviewsStyle = styled.div`
  width: 400px;
  background: #FFFFFF;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 70% 5% 25%;
  grid-gap: 10px;
  /* overflow: hidden; */
  position: relative;
  
  .mobile & {
    width: auto;
    margin: 0px 7px 20% 7px;
    height: 442px;
    box-shadow: 0px 9px 18px 7px rgba(0, 0, 0, 0.17);
    grid-template-rows: 70% 30% 20%;
    grid-gap: 0px;
  }
`

const ReviewsContainer = styled.div`
  align-self: end;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow: hidden;
`

const ReviewsCounter = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  grid-gap: 20px;
  align-items: center;
`

const ReviewPoint = styled.div`
  width: 10px;
  height: 10px;
  background: #7171715E;
  border-radius: 5px;
  transition: background-color 0.3s;
`

const ReviewPointSelected = styled(ReviewPoint)`
  background: #717171;
`

const ReviewsMoreButton = styled(DIV_BUTTON_WHITE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  height: 35px;
  width: 50%;
  justify-self: center;
  color: ${({ theme }) => theme.font.color.blue};
  
  .mobile & {
    align-self: center;
    width: auto;
  }
`

const ReviewsArrow = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  width: 100px;
  display: grid;
  align-items: center;
  justify-items: center;
  opacity: 0.7;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 1;
  }
  
  .mobile & {
    position: relative;
  }
`

const ReviewsArrowLeft = styled(ReviewsArrow)`
  left: -100px;

  .mobile & {
    left: 0px;
  }
`

const ReviewsArrowRight = styled(ReviewsArrow)`
  left: 100%;

  .mobile & {
    left: 0px;
  }
`

interface Review {
    id: number,
    photo: string;
    text: string;
    name: string;
    role: string
}

const Reviews: React.FC = () => {

    const [pos, setPos] = useState(0);
    const [reviewsList, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        setReviews(Api.getReviews());
    }, []);

    function leftArrow() {
        setPos((pos - 1 + reviewsList.length) % reviewsList.length);
    }
    function rightArrow() {
        setPos((pos + 1) % reviewsList.length);
    }

    return (
        isMobile ?
        <ReviewsStyle>
            <ReviewsContainer>
                { reviewsList.map((review) => <Review pos={pos} key={review.id} name={review.name} photo={review.photo} role={review.role} text={review.text} />) }
            </ReviewsContainer>
            <ButtonBlue styled={ReviewsMoreButton}>Читать все отзывы</ButtonBlue>
            <ReviewsCounter>
                <ReviewsArrowLeft onClick={leftArrow}>
                    <img src={icons.larrowblack} />
                </ReviewsArrowLeft>
                { reviewsList.map((review, i) => pos == i ? <ReviewPointSelected key={review.id}></ReviewPointSelected> : <ReviewPoint key={review.id}></ReviewPoint>)}
                <ReviewsArrowRight onClick={rightArrow}>
                    <img src={icons.rarrowblack} />
                </ReviewsArrowRight>
            </ReviewsCounter>
        </ReviewsStyle>
            :
        <ReviewsStyle>
            <ReviewsContainer>
                { reviewsList.map((review) => <Review pos={pos} key={review.id} name={review.name} photo={review.photo} role={review.role} text={review.text} />) }
            </ReviewsContainer>
            <ReviewsCounter>
                { reviewsList.map((review, i) => pos == i ? <ReviewPointSelected key={review.id}></ReviewPointSelected> : <ReviewPoint key={review.id}></ReviewPoint>)}
            </ReviewsCounter>
            <ButtonBlue styled={ReviewsMoreButton}>Читать все отзывы</ButtonBlue>
            <ReviewsArrowLeft onClick={leftArrow}>
                <img src={icons.larrow} />
            </ReviewsArrowLeft>
            <ReviewsArrowRight onClick={rightArrow}>
                <img src={icons.rarrow} />
            </ReviewsArrowRight>
        </ReviewsStyle>
    );
};

export default Reviews;