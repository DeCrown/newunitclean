import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";

export const WINDOW_AUTHORIZATION = 'WINDOW_AUTHORIZATION';
export const WINDOW_REGISTRATION = 'SET_WINDOW_REGISTRATION';
export const WINDOW_SEARCH = 'SET_WINDOW_SEARCH';
export const WINDOW_TESTING = 'WINDOW_TESTING';

export const SET_WINDOW = 'SET_WINDOW';
export const CLEAR_WINDOWS = 'CLEAR_WINDOWS';

interface SetWindow {
  type: typeof SET_WINDOW;
  payload: IStateWindows;
}

interface ClearWindows {
  type: typeof CLEAR_WINDOWS;
}

export type WindowAction = SetWindow | ClearWindows;