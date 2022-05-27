import {CategoryType} from "src/utils/types";

export interface IStateCategories {
  isFetching : boolean
  error : null | string
  categories : CategoryType[]
}