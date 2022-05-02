import Generator from "api/methods/productGenerator";

export const get = () => {
    return [
        {
            number: 1,
            products: Generator(true)
        },
        {
            number: 2,
            products: Generator(true)
        },
        {
            number: 3,
            products: Generator(true)
        },
    ];
}