
export interface route {
    url: string;
    page(): JSX.Element;
    mobileClearBackground?: boolean;
    browserClearBackground?: boolean;
}

export interface headerMenuTopButton {
    href?: string;
    text: string;
    func?: () => void;
}

export interface headerMenuBottomButton {
    href?: string;
    text: string;
    icon: string;
    func?: () => void;
}



export interface ProductType {
    id: number;
    image: string[];
    title: string;
    description: {
            header: string;
            text: string | string[]
        }[];
    price: number;
    buttons?: boolean;
    favourite?: boolean;
    promotion?: boolean;
}

export interface PromotionType {
    id: number;
    product: number;
    title: string;
    price: number;
    discount: number;
}