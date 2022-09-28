import React from 'react';
import styled from "styled-components";
import reason from "components/main/whywe/reason";
import {WindowsManagerClear, WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_TESTING} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "src/store/configureStore";
import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";

const ReasonStyle = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 10px;
  //filter: drop-shadow(1px 3px 3px rgba(0, 0, 0, 0.5));
  padding: 20px;
  display: grid;
  grid-template-rows: 60%;
  justify-items: center;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 1px 3px 3px rgba(0,0,0,0.5);
  position: relative;
  
  .mobile & {
    width: 270px;
    height: 280px;
  }
`;

const Text = styled.div`
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  text-align: left;
  font-size: calc((100vw - 920px)/(${window.screen.width} - 920) * (16 - 9) + 9px);

  @media (max-width : 920px) {
    & {
      font-size: 9px;
    }
  }

  @media (min-width : ${window.screen.width}px) {
    & {
      font-size: ${({ theme }) => theme.font.size[16]};
    }
  }
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[16]};
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export interface reason {
    icon: string;
    text: string;
    clickable?: boolean;
    icon_clicked?: string
};

const Reason = (props: {reason: reason}) => {
    const WindowsManager = useTypedSelector((store) => store.WindowsManager);
    const {window} = WindowsManager as IStateWindows;
    const dispatch = useDispatch();

    const click = () => {
        if (window == WINDOW_TESTING) {
            WindowsManagerClear()(dispatch);
        }
        else {
            WindowsManagerOpen(WINDOW_TESTING)(dispatch);
        }
    }

    return (
        <ReasonStyle onClick={props.reason.clickable ? click : undefined}>
            <Image src={(props.reason.clickable && window == WINDOW_TESTING) ? props.reason.icon_clicked : props.reason.icon}/>
            <Text>{props.reason.text}</Text>
        </ReasonStyle>
    );
};

export default Reason;