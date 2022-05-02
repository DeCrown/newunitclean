import Generator from "api/methods/productGenerator";

export const get = () => {
    return [
        {
            category: 'Бытовая химия',
            products: Generator()
        },
        {
            category: 'Санитайзеры',
            products: Generator()
        },
        {
            category: 'Незамерзающие жидкости',
            products: Generator()
        },
        {
            category: 'Автохимия',
            products: Generator()
        }
    ];
}