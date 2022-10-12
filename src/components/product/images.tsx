import React, {useState} from 'react';
import styled from "styled-components";
import {BASE_URL} from "src/utils/constants";

const Main = styled.div<{src: string}>`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  position: relative;
  margin: 30px;

  height: calc(100% - 60px);
  max-height: 400px;
  
  .mobile & {
    margin: 0;
  }
  
  &.noImage {
    width: 100%;
    background-color: rgba(196,196,196,0.23);
  }
`;

const Other = styled.div`
  position: relative;
  display: flex;
  //grid-template-columns: 1fr 1fr 1fr;
  //padding: 0 80px;
  grid-gap: 16px; gap: 16px;
  //grid-auto-rows: 1fr;
  height: 100px;
  margin: 30px;
  flex-wrap: wrap;
  
  .mobile & {
    padding: 0
  }
`;

const ImageStyle = styled.div<{src: string}>`
  cursor: pointer;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  aspect-ratio: 1;
  border: 2px solid white;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  
  &.selected {
    border-color: #2196F3;
  }
`;

const Image = (props: {src: string; self: number; func: (i: number) => void; selected: boolean}) => {
    function click() {
        props.func(props.self);
    }
    return(
        <ImageStyle className={props.selected ? 'selected' : undefined} src={BASE_URL + props.src} onClick={click} />
    )
}

const Images = (props: {images: string[]}) => {
    const [selected, setSelected] = useState(0);

    const select = (i: number) => {
        setSelected(i);
    }

    return (
        <div>
            <Main src={props.images[selected] ? BASE_URL + props.images[selected] : ''}
                  className={props.images[selected] ? '' : 'noImage'} />
            <Other>
                { props.images.map((image, i) =>
                    <Image selected={selected == i} key={i} func={select} self={i} src={image} />
                ) }
            </Other>
        </div>
    );
};

export default Images;