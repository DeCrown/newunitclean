import React, {useState} from 'react';
import styled from "styled-components";
import {BASE_URL} from "src/utils/constants";

const PointsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px; gap: 20px;
  justify-content: center;
  padding: 40px 0;
`;

const Point = styled.div`
  width: 10px;
  height: 10px;
  background: #7171715E;
  border-radius: 5px;
  transition: background-color 0.3s;
`

const PointSelected = styled(Point)`
  background: #717171;
`

const ImagesContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  height: 220px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: rgba(196, 196, 196, 0.23);
`;

const Image = styled.div<{src: string; left: number}>`
  position: relative;
  left: ${props => props.left}%;
  background-image: url(${props => BASE_URL + props.src});
  background-color: rgba(196, 196, 196, 0.23);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  &.untouched {
    transition: left 0.3s;
  }
`;

const ImagesMobile = (props: {images: string[]}) => {
    const [selected, setSelected] = useState(0);
    const [touched, setTouched] = useState(false);
    const [firstTouch, setFirstTouch] = useState(0);
    const [lastTouch, setLastTouch] = useState(0);

    const start = (event: any) => {
        setTouched(true);
        setFirstTouch(event.touches.item(event.touches.length - 1).screenX / window.innerWidth);
    }

    const move = (event: any) => {
        if (event.touches.length) {
            setLastTouch(event.touches.item(event.touches.length - 1).screenX / window.innerWidth);
        }
    }

    const end = (event: any) => {
        setTouched(false);
        if (event.touches.length) {
            setLastTouch(event.touches.item(event.touches.length - 1).screenX / window.innerWidth);
        }

        if (firstTouch - lastTouch > 0.15) {
            if (selected < props.images.length - 1) {
                setSelected(selected + 1);
            }
        }
        else if (firstTouch - lastTouch < -0.15) {
            if (selected > 0) {
                setSelected(selected - 1);
            }
        }
    }

    return (
        <div>
            <ImagesContainer onTouchStart={start} onTouchMove={move} onTouchEnd={end}>
                { props.images.map((image, i) => {
                    if (touched) {
                        return <Image key={i} left={-100 * selected + 100 * (lastTouch - firstTouch)} src={image}/>
                    }
                    else {
                        return <Image className={'untouched'} key={i} left={-100 * selected} src={image}/>
                    }
                }) }
            </ImagesContainer>
            <PointsContainer>
                { props.images.map((image, i) => {
                    if (selected == i) {
                        return <PointSelected key={i}></PointSelected>
                    }
                    else {
                        return <Point key={i}></Point>
                    }
                }) }
            </PointsContainer>
        </div>
    );
};

export default ImagesMobile;