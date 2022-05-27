import {OrderType} from "src/utils/types";

export interface IStatePreviousOrders {
  isFetching : boolean
  error : null | string
  orders : OrderType[]
}