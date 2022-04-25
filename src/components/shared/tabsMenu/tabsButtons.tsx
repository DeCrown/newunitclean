import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "src/store";


const TabButtonStyle = styled.div`
  padding: 10px 0px;
  cursor: pointer;

  border-bottom: 2px solid #BA172C00;
  font-size: ${({ theme }) => theme.font.size[12]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.gray};
  transition: color 0.3s, border 0.3s;

  display: grid;
  align-content: center;
  
  &.selected {
    border-bottom: 2px solid;
    color: ${({ theme }) => theme.font.color.red};
  }
`

const TabButton = (props: { children: string, self: number } ) => {

    const pos = useTypedSelector((state) => state.tabsMenu.pos);
    const dispatch = useDispatch();

    function click() {
        dispatch({
            type: 'SET_POS',
            payload: props.self
        });
    }

    return (
        <TabButtonStyle className={props.self == pos ? 'selected' : ''} onClick={click}>{props.children}</TabButtonStyle>
    );
};


const TabsButtonsStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 20px;
  margin-top: 30px;
  margin-bottom: 50px;
  
  .mobile & {
    height: 30px;
    justify-content: space-between;
  }
`;

const TabsButtons = (props: {titles: any[]}) => {
    return (
        <TabsButtonsStyle>
            { props.titles.map((title, i) => <TabButton self={i} key={i}>{title}</TabButton>) }
        </TabsButtonsStyle>
    );
};

export default TabsButtons;