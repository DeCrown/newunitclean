import React, {useState} from 'react';
import styled from "styled-components";

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
  transition: left 0.3s;
  position: relative;
  left: ${props => props.left}%;
  background-image: url(${props => props.src});
  background-color: rgba(196, 196, 196, 0.23);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ImagesMobile = (props: {images: string[]}) => {
    const [selected, setSelected] = useState(0);
    const [firstTouch, setFirstTouch] = useState(0);
    const [lastTouch, setLastTouch] = useState(0);

    const start = (event: any) => {
        setFirstTouch(event.touches.item(event.touches.length - 1).screenX / (window.innerWidth / 3));
    }

    const move = (event: any) => {
        if (event.touches.length) {
            setLastTouch(event.touches.item(event.touches.length - 1).screenX / (window.innerWidth / 3));
        }
    }

    const end = (event: any) => {
        if (event.touches.length) {
            setLastTouch(event.touches.item(event.touches.length - 1).screenX / (window.innerWidth / 3));
        }

        if (lastTouch < 1 && firstTouch > 1) {
            setSelected((selected + 1) % props.images.length);
        }
        if (lastTouch > 1 && firstTouch < 1) {
            setSelected((selected - 1 + props.images.length) % props.images.length);
        }
    }

    return (
        <div>
            <ImagesContainer onTouchStart={start} onTouchMove={move} onTouchEnd={end}>
                { props.images.map((image, i) => {
                    return <Image left={-100 * (selected - i)} src={image} />
                }) }
            </ImagesContainer>
            <PointsContainer>
                { props.images.map((image, i) => {
                    if (selected == i) {
                        return <PointSelected></PointSelected>
                    }
                    else {
                        return <Point></Point>
                    }
                }) }
            </PointsContainer>
        </div>
    );
};

export default ImagesMobile;