import {combineReducers } from 'redux'
import {AuthReducer} from "./AuthReducer/AuthReducer";
import {WindowsManagerReducer} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer";
import {TabsMenuReducer} from "src/reducers/TabsMenuReducer/TabsMenuReducer";
import {CartReducer} from "src/reducers/CartReducer/CartReducer";
import {ProductListReducer} from "src/reducers/ProductListReducer/ProductListReducer";
import {CategoriesReducer} from "src/reducers/CategoriesReducer/CategoriesReducer";
import {FavouritesReducer} from "src/reducers/FavouritesReducer/FavouritesReducer";
import {PreviousOrdersReducer} from "src/reducers/PreviousOrdersReducer/PreviousOrdersReducer";
import {PromotionsReducer} from "src/reducers/PromotionsReducer/PromotionsReducer";
import {SearchReducer} from "src/reducers/SearchReducer/SearchReducer";
import {EmployeeReducer} from "src/reducers/EmployeeReducer/EmployeeReducer";
import {CompanyReducer} from "src/reducers/CompanyReducer/CompanyReducer";
import {ProductReducer} from "src/reducers/ProductReducer/ProductReducer";
import {MostTradingReducer} from "src/reducers/MostTradingReducer/MostTradingReducer";
import {MainPageReducer} from "src/reducers/MainPageReducer/MainPageReducer";
import {CompanyPreviousOrdersReducer} from "src/reducers/CompanyPreviousOrdersReducer/CompanyPreviousOrdersReducer";
import {MobileMenuReducer} from "src/reducers/MobileMenuReducer/MobileMenuReducer";
import {PriceListReducer} from "src/reducers/PriceListReducer/PriceListReducer";

const appReducer = combineReducers({
  Auth: AuthReducer,
  WindowsManager: WindowsManagerReducer,
  TabsMenu: TabsMenuReducer,
  Cart: CartReducer,
  ProductList: ProductListReducer,
  Categories: CategoriesReducer,
  Favourites: FavouritesReducer,
  PreviousOrders: PreviousOrdersReducer,
  Promotions: PromotionsReducer,
  Search: SearchReducer,
  Employee: EmployeeReducer,
  Company: CompanyReducer,
  Product: ProductReducer,
  MostTrading: MostTradingReducer,
  MainPage: MainPageReducer,
  CompanyPreviousOrders: CompanyPreviousOrdersReducer,
  MobileMenu: MobileMenuReducer,
  PriceList: PriceListReducer
})

export const rootReducer = (state: any, action: any) => {
  /*if (action.type === GET_LOGOUT_AUTH_SUCCESS) {
    state = undefined
  }*/

  console.log(action);

  return appReducer(state, action)
}

export type RootState = ReturnType<typeof rootReducer>
