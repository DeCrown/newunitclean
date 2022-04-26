import * as constants from "./constants";
import {route} from "src/utils/types";
import Main from "../pages/main";
import Cart from "../pages/cart";
import Contacts from "../pages/contacts";
import Catalog from "src/pages/catalog";
import Promotions from "src/pages/promotions";

export const authRoutes:route[] = [
    {
        url: constants.URLs.LK,
        page: Main
    },
    {
        url: constants.URLs.PAYMENT,
        page: Main
    },
    {
        url: constants.URLs.CART,
        page: Cart,
        mobileClearBackground: true,
        browserClearBackground: true
    },
]

export const freeRoutes:route[] = [
    {
        url: constants.URLs.ROOT,
        page: Main
    },
    {
        url: constants.URLs.CATALOG,
        page: Catalog
    },
    {
        url: constants.URLs.PROMOTION,
        page: Promotions,
        mobileClearBackground: true,
        browserClearBackground: false
    },
    {
        url: constants.URLs.REVIEWS,
        page: Main
    },
    {
        url: constants.URLs.CONTACTS,
        page: Contacts,
        mobileClearBackground: true,
        browserClearBackground: true
    },
    {
        url: constants.URLs.SEARCH,
        page: Main
    },
    {
        url: constants.URLs.P404,
        page: Main
    },
]