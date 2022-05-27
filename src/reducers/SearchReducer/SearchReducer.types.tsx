import {ProductType} from "src/utils/types";

export interface IStateSearch {
  isFetching : boolean
  error : null | string
  results : ProductType[]
  cache : ProductType[]
}