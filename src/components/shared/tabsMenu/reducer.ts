import {TypedUseSelectorHook, useSelector} from "react-redux";

interface state {
    pos: number;
    heights: { };
}

interface actionSetPos {
    type: 'SET_POS';
    payload: number;
}
interface actionSetHeight {
    type: 'SET_HEIGHT';
    payload: {pos: number; height: number};
}

const defaultState : state = {pos: 0, heights: 'auto'};

export const Reducer = (state = defaultState, action: actionSetPos | actionSetHeight) : state => {
    switch (action.type) {
        case "SET_POS":
            return {...state, pos: action.payload}
        case "SET_HEIGHT":
            return {...state, heights: {...state, [action.payload.pos]: action.payload.height}}
        default:
            return state;
    }
}