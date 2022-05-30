import {ProductType} from "src/utils/types";

export interface IStatePromotions {
  isFetching : boolean
  error : null | string
  promotions : ProductType[]
}