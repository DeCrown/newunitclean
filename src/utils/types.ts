
export interface route {
    url: string | any;
    page: (prop?: any) => JSX.Element;
    mobileClearBackground?: boolean;
    browserClearBackground?: boolean;
}

export interface selectOption {
    value: string | undefined;
    text: string;
}

export interface headerMenuTopButton {
    href?: string;
    text: string;
    func?: () => void;
    auth?: boolean
}

export interface headerMenuBottomButton {
    href?: string;
    text: string;
    icon: string;
    func?: () => void;
    auth?: boolean
}

export interface ProductType {
    id: number;
    group?: number;
    image: string[];
    title: string;
    /*description: {
            header: string;
            text: string | string[]
        }[];*/
    description: string;
    price: number;
    discount?: number;
    buttons?: boolean;
    promotion?: boolean;
}

export interface CategoryType {
    id: number;
    title: string;
}

export interface PromotionType {
    id: number;
    product?: number;
    title: string;
    price?: number;
    percentage_amount: number;
    image: string;
}

export interface OrderType {
    id: number;
    product: ProductType[];
    full_price: number;
    payment_type: "КАРТОЙ" | "НАЛИЧНЫМИ" | null;
    receiving_type: "САМОВЫВОЗ" | "ДОСТАВКА" | null;
    address: string | null;
    promo_code: string | null;
}

export interface EmployeeType {
    full_name: string;
    phone_number: string;
    address: string;
    avatar: string;
    email: string
}

export interface CompanyType {
    id: number;
    title: string;
    logo: string;
    description: string;
    inn: string;
    official_address: string;
    phone_number: string;
    kpp: string;
    real_address: string;
    employee: string;
    email: string;
}

export interface inputTextManage {

}