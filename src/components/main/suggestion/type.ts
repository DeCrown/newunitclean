import {ProductType} from "src/utils/types";

export interface SuggestionType {
    title: string;
    background?: string;
    product: ProductType;
    discount: number;
}