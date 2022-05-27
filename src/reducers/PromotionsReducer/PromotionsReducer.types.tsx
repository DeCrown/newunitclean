import {PromotionType} from "src/utils/types";

export interface IStatePromotions {
  isFetching : boolean
  error : null | string
  promotions : PromotionType[]
}