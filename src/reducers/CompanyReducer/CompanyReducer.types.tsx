import {CompanyType} from "src/utils/types";

export interface IStateCompany {
  isFetching : boolean
  error : null | string
  company : CompanyType
}