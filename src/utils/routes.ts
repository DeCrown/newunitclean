import * as constants from "./constants";
import {route} from "src/utils/types";
import Main from "../pages/main";
import Cart from "../pages/cart";
import Contacts from "../pages/contacts";

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
        clearBackground: true
    },
]

export const freeRoutes:route[] = [
    {
        url: constants.URLs.ROOT,
        page: Main
    },
    {
        url: constants.URLs.CATALOG,
        page: Main
    },
    {
        url: constants.URLs.PROMOTION,
        page: Main
    },
    {
        url: constants.URLs.REVIEWS,
        page: Main
    },
    {
        url: constants.URLs.CONTACTS,
        page: Contacts,
        clearBackground: true
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