import {getReviews} from './methods/getReviews';
import {Cart} from "./methods/cart";
import {Catalog} from "api/methods/catalog";
import {Promotions} from "api/methods/promotions";
import {Lk} from "api/methods/lk";

export const Api = {
    getReviews: getReviews,
    Cart: Cart,
    Catalog: Catalog,
    Promotions: Promotions,
    Lk: Lk
}