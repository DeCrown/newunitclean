export interface state {
    active: (() => JSX.Element) | undefined;
}

interface actionSetActiveWindow {
    type: 'SET_ACTIVE_WINDOW';
    payload: () => JSX.Element;
}
interface actionResetWindow {
    type: 'RESET_WINDOW';
}

const defaultState : state = {active: undefined};

export const Reducer = (state = defaultState, action: actionSetActiveWindow | actionResetWindow) : state => {
    switch (action.type) {
        case "SET_ACTIVE_WINDOW":
            return {...state, active: action.payload}
        case "RESET_WINDOW":
            return {...state, active: undefined}
        default:
            return state;
    }
}