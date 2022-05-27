import {ProductType} from "src/utils/types";

export interface IStateFavourites {
  isFetching : boolean
  error : null | string
  products : ProductType[]
}