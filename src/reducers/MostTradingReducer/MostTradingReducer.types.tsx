import {ProductType} from "src/utils/types";

export interface IStateMostTrading {
  isFetching : boolean
  error : null | string
  products : ProductType[]
}