import React from 'react';
import styled from "styled-components";
import {Main} from "src/themes/main";
import {WindowsManagerClear} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {useDispatch} from "react-redux";

const Background = styled.div`
  position: fixed;
  width: calc(100% - ${Main.values.contentMargin * 2}px);
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 ${Main.values.contentMargin}px;
  align-content: center;
  background: linear-gradient(138.97deg, rgba(173, 184, 196, 0.252) 16.4%, rgba(113, 113, 113, 0.259) 70%);
  box-shadow: inset 0px 4.74611px 300px rgba(0, 0, 0, 0.25);
  
  .mobile & {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const EmptyBackground = () => {
    const dispatch = useDispatch();

    const click = () => {
        WindowsManagerClear()(dispatch);
    }

    return (
        <Background onClick={click}></Background>
    );
};

export default EmptyBackground;