import {OrderType} from "src/utils/types";

export interface IStateCart {
  isFetching : boolean
  error : null | string
  cart : OrderType
}