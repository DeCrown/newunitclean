import {ProductType} from "src/utils/types";

export interface IStateMainPage {
  isFetching : boolean
  error : null | string
  products : ProductType[]
}