import {
  CompanyAction,
  GET_COMPANY_FAIL,
  GET_COMPANY_REQUEST,
  GET_COMPANY_SUCCESS
} from "src/actions/CompanyAction/CompanyAction.types";
import {IStateCompany} from "src/reducers/CompanyReducer/CompanyReducer.types";

const initialStateCompany = {
  isFetching: false,
  error: null,
  company: {
    id: -1,
    title: '',
    logo: '',
    description: '',
    inn: '',
    official_address: '',
    phone_number: '',
    kpp: '',
    real_address: '',
    employee: '',
    email: ''
  }
};


export function CompanyReducer(state: IStateCompany = initialStateCompany, action: CompanyAction) {
  switch (action.type) {
    case GET_COMPANY_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_COMPANY_SUCCESS:
      return { ...state,
        company: action.payload, isFetching: false, error: null };
    case GET_COMPANY_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
