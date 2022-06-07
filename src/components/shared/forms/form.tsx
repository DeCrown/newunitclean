import React, {useCallback} from 'react';
import styled from "styled-components";
import {Main} from "src/themes/main";
import {icons} from "src/utils/icons";
import {useDispatch} from "react-redux";
import {WindowsManagerClear} from "src/actions/WindowsManagerAction/WindowsManagerAction";

const FormStyle = styled.form`
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 9px 18px 7px rgba(0, 0, 0, 0.17);
  border-radius: 10px;
  margin: 0 135px;
  padding: 40px 0;
  min-width: 490px;
  
  .background & {
    padding: 0 0 16px 0;
    overflow-x: auto;
  }
  
  .mobile & {
    min-width: 0px;
    margin: 0px;
    padding-top: 20px;
  }
`;

const Form = (props: {children: any; closeButton?: boolean}) => {
    return (
        <FormStyle>
            {props.children}
        </FormStyle>
    );
};

export const FormCloseStyle = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 52px;
  height: 52px;
  cursor: pointer;
  display: grid;
  align-content: center;
  justify-content: center;
  
  & img {
    transition: transform 0.2s ease-in-out;
  }
  
  &:hover img {
    transform: rotate(100grad);
  }
`;

const FormClose = () => {
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    return (
        <FormCloseStyle onClick={() => stableDispatch(WindowsManagerClear())}>
            <img src={icons.close} />
        </FormCloseStyle>
    );
}


const FormContainerStyle = styled.div<{css: any}>`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  ${props => props.css};
  
  &.background {
    position: fixed;
    width: calc(100% - ${Main.values.contentMargin * 2}px);
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 0 ${Main.values.contentMargin}px;
    align-content: center;
    background: #00000080;
    
    .mobile &.background {
      z-index: 3;
      width: calc(100% - ${Main.values.contentMobileMargin * 2}px);
      padding: 0 ${Main.values.contentMobileMargin}px;
    }
  }
`

export const FormContainer = (props: {children: any; css?: any; background?: boolean}) => {
    return (
        <FormContainerStyle className={props.background ? 'background': ''} css={props.css}>
            <Form>
                {props.background ? <FormClose></FormClose> : '' }
                {props.children}
            </Form>
        </FormContainerStyle>
    );
};

export const FormList = styled.div`
  display: grid;
  grid-gap: 15px; gap: 15px;
  margin: 0 220px;
  justify-content: center;
  grid-template-columns: 1fr;
  
  & input {
    min-width: 370px;
  }
  
  .mobile & {
    margin: 16px;

    & input {
      min-width: 0px;
    }
  }
`;