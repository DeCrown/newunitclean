import {EmployeeType} from "src/utils/types";

export interface IStateEmployee {
  isFetching : boolean
  error : null | string
  employee : EmployeeType
}