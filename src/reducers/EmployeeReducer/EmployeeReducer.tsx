import {IStateEmployee} from "src/reducers/EmployeeReducer/EmployeeReducer.types";
import {
  EmployeeAction,
  GET_EMPLOYEE_FAIL,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS
} from "src/actions/EmployeeAction/EmployeeAction.types";

const initialStateEmployee = {
  isFetching: false,
  error: null,
  employee: {
    full_name: '',
    phone_number: '',
    address: '',
    avatar: '',
    email: ''
  }
};


export function EmployeeReducer(state: IStateEmployee = initialStateEmployee, action: EmployeeAction) {
  switch (action.type) {
    case GET_EMPLOYEE_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_EMPLOYEE_SUCCESS:
      return { ...state,
        employee: action.payload, isFetching: false, error: null };
    case GET_EMPLOYEE_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
