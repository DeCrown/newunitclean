import {ProductType} from "src/utils/types";

export interface IStateProduct {
  isFetching : boolean
  error : null | string
  product : ProductType
}