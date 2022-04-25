import React from "react";

export interface route {
    url: string;
    page(): JSX.Element;
    clearBackground?: boolean
}

export interface headerMenuTopButton {
    href: string;
    text: string;
}

export interface headerMenuBottomButton {
    href: string;
    text: string;
    icon: string;
}

export interface ProductType {
    id: number,
    image: string;
    title: string;
    description: string;
    price: number;
    buttons?: boolean;
    favourite?: boolean;
    promotion?: boolean;
}