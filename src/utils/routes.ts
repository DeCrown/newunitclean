import * as constants from "./constants";
import {route} from "src/utils/types";
import Main from "../pages/main";
import Cart from "../pages/cart";
import Contacts from "../pages/contacts";
import Catalog from "src/pages/catalog";
import Promotions from "src/pages/promotions";
import Lk from "src/pages/lk";
import Payment from "src/pages/payment";
import Product from "src/pages/product";
import CompanyLk from "src/pages/company_lk";
import Search from "src/pages/search";
import Page404 from "src/pages/special/page404";

export const routes:route[] = [
    {
        url: constants.URLs.LK,
        page: Lk,
        mobileClearBackground: true,
        auth: true
    },
    {
        url: constants.URLs.COMPANY_LK,
        page: CompanyLk,
        mobileClearBackground: true,
        auth: true
    },
    {
        url: constants.URLs.PAYMENT,
        page: Payment,
        mobileClearBackground: true,
        browserClearBackground: true,
    },
    {
        url: constants.URLs.CART,
        page: Cart,
        mobileClearBackground: true,
        browserClearBackground: true,
        auth: true
    },
    {
        url: constants.URLs.ROOT,
        page: Main
    },
    {
        url: constants.URLs.CATALOG,
        page: Catalog,
        mobileClearBackground: true,
    },
    {
        url: constants.URLs.PROMOTION,
        page: Promotions,
        mobileClearBackground: true,
        browserClearBackground: false
    },
    {
        url: constants.URLs.CONTACTS,
        page: Contacts,
        mobileClearBackground: true,
        browserClearBackground: true
    },
    {
        url: constants.URLs.SEARCH,
        page: Search,
        mobileClearBackground: true,
        browserClearBackground: true
    },
    {
        url: constants.URLs.SEARCH_WITH_PARAM,
        page: Search,
        mobileClearBackground: true,
        browserClearBackground: true
    },
    {
        url: constants.URLs.PRODUCT,
        page: Product,
        mobileClearBackground: true,
    },
    {
        url: constants.URLs.P404,
        page: Page404
    },
]