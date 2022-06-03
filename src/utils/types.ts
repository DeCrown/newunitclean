
export interface route {
    url: string | any;
    page: (prop?: any) => JSX.Element;
    mobileClearBackground?: boolean;
    browserClearBackground?: boolean;
    auth?: boolean;
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

export interface SuggestionType {
    title: string;
    background?: string;
    product: ProductType;
}

export interface ProductSizeType {
    title: string;
    amount: number
}

export interface ProductType {
    id: number;
    group?: number;
    image: string;
    images?: string[];
    title: string;
    description: string;
    sizes: ProductSizeType[]
    price?: number;
    discount?: string;
    buttons?: boolean;
    promotion?: boolean;
    amount_of_product?: number;
    product_order_size?: string;
    order_size_price?: number
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
    date_to_receive?: string;
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