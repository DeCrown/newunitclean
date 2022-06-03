import React, {useState} from 'react';
import styled from "styled-components";

const Main = styled.div`
  position: relative;
  margin: 0 30px 30px 30px;
  display: grid;
  align-content: center;
  justify-items: center;
  
  & img {
    max-height: 400px;
    max-width: 100%;
  }
  
  .mobile & {
    margin: 0;
  }
`;

const Other = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 30px;
  grid-gap: 16px;
  grid-auto-rows: 1fr;
  
  .mobile & {
    padding: 0
  }
`;

const ImageStyle = styled.div<{src: string}>`
  cursor: pointer;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  aspect-ratio: 1;
`;

const NoImage = styled.div`
  height: 400px;
  width: 100%;
  background-color: rgba(196,196,196,0.23);
`;

const Image = (props: {src: string; self: number; func: (i: number) => void}) => {
    function click() {
        props.func(props.self);
    }
    return(
        <ImageStyle src={props.src} onClick={click} />
    )
}

const Images = (props: {images: string[]}) => {
    const [selected, setSelected] = useState(0);

    const select = (i: number) => {
        setSelected(i);
    }

    return (
        <div>
            <Main>
                {
                    props.images[selected] ?
                        <img src={props.images[selected]} />
                        :
                        <NoImage />
                }
            </Main>
            <Other>
                { props.images.map((image, i) =>
                    <Image key={i} func={select} self={i} src={image} />
                ) }
            </Other>
        </div>
    );
};

export default Images;