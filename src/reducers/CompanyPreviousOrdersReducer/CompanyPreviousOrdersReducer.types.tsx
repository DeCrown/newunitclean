import {OrderType} from "src/utils/types";

export interface IStateCompanyPreviousOrders {
  isFetching : boolean
  error : null | string
  orders : OrderType[]
}