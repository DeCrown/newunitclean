export interface IStateTabsManu {
    pos: number;
    heights: {};
}

interface actionSetPos {
    type: 'SET_POS';
    payload: number;
}
interface actionSetHeight {
    type: 'SET_HEIGHT';
    payload: {pos: number; height: number};
}

const defaultState = {pos: 0, heights: 'auto'};

export const TabsMenuReducer = (state = defaultState, action: actionSetPos | actionSetHeight) : IStateTabsManu => {
    switch (action.type) {
        case "SET_POS":
            return {...state, pos: action.payload}
        case "SET_HEIGHT":
            return {...state, heights: {...state, [action.payload.pos]: action.payload.height}}
        default:
            return state;
    }
}