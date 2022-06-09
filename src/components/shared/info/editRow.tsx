import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {icons} from "src/utils/icons";
import {isMobile} from "src/utils/isMobile";
import EditIcon from "src/icons/edit";
import SaveIcon from "src/icons/save";

const EditRowStyle = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content 1fr 7fr min-content;
  
  &.verified {
    border-bottom: 1px solid #36873E;
  }

  .mobile {
    grid-template-columns: min-content min-content auto min-content;
  }
  .mobile &.verified {
    border-bottom: 1px solid #2196F3;
  }
  
  & > div {
    display: grid;
    grid-auto-flow: column;
    align-content: center;
    justify-items: center;
    grid-auto-columns: 1fr;
  }
  
  & img {
    margin: 0 8px;
  }
`;

const Verified = styled.div`
  justify-self: end;
  margin-left: 20px;

  .mobile & {
    margin-left: 0px;
    
    & img {
      margin-left: 0px;
    }
  }
`;

const Title = styled.div`
  justify-self: start;
  font-size: ${({ theme }) => theme.font.size[22]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.font.color.black};
  margin-left: 28px;
  white-space: nowrap;
  
  .verified & {
    margin-left: 0px;
  }
  
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[18]};
    margin-left: 0px;
  }
`;

const Value = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};

  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
    justify-self: end;
  }
`;

const LargeValue = styled(Value)`
  font-size: ${({ theme }) => theme.font.size[28]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  justify-content: start;

  .mobile & {
    font-size: ${({ theme }) => theme.font.size[20]};
    justify-self: start;
  }
`;

const EditSaveButton = styled.div`
  justify-self: end;
  font-size: ${({ theme }) => theme.font.size[12]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: rgba(0, 0, 0, 0.3);
  grid-gap: 6px; gap: 6px;
  cursor: pointer;
  
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }

  &:hover > svg {
    opacity: 0.8;
  }
  
  .mobile & {
    margin-left: 10px;
  }
`;

const EditValue = styled.input`
  font-family: 'Montserrat';
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};

  .mobile & {
    font-size: ${({ theme }) => theme.font.size[14]};
    justify-self: end;
  }

  background: none;
  border: 2px dotted #626262;
  width: 90%;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 10px;
`;

export const EditRow = (props: {nonEditable?: boolean; title?: string; value: string; verified?: boolean; save?: (val: string) => void}) => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState('');

    const switchEditing = () => {
        setEditing(!editing);
    }

    const setVal = (event?: any) => {
        setValue(event.target.value);
    }

    const save = () => {
        if (props.save) {
            props.save(value);
        }
        switchEditing();
    }

    return (
        <EditRowStyle className={props.verified ? 'verified' : ''}>
            { props.verified ? <Verified><img src={isMobile() ? icons.verified_blue : icons.verified} /></Verified> : <div></div> }
            { props.title ? <Title>{props.title}:</Title> : <div></div> }
            { props.title ?
                <Value>
                    {editing ? <EditValue type={'text'} defaultValue={props.value} onInput={setVal}></EditValue> : props.value}
                </Value>
                :
                <LargeValue>
                    {editing ? <EditValue type={'text'} defaultValue={props.value} onInput={setVal}></EditValue> : props.value}
                </LargeValue> }
            { props.nonEditable
                ? null
                : editing
                    ? <EditSaveButton onClick={save}><SaveIcon/>Сохр.</EditSaveButton>
                    : <EditSaveButton onClick={switchEditing}><EditIcon/>Ред.</EditSaveButton>
            }
        </EditRowStyle>
    );
};

export const EditRows = styled.div`
  display: grid;
  grid-gap: 40px; gap: 40px;
`;