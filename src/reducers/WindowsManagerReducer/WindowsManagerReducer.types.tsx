import {
  WINDOW_AUTHORIZATION,
  WINDOW_REGISTRATION,
  WINDOW_SEARCH,
  WINDOW_TESTING
} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";

export interface IStateWindows {
  window: typeof WINDOW_AUTHORIZATION | typeof WINDOW_REGISTRATION | typeof WINDOW_SEARCH | typeof WINDOW_TESTING | null;
  url?: string;
}