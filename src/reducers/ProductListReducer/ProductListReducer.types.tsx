import {ProductType} from "src/utils/types";

export interface IStateProductList {
  isFetching : boolean
  error : null | string
  products : ProductType[]
}