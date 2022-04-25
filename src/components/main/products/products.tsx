import React from 'react';
import styles from './products.module.css';

interface product {
    title: string;
    image: string;
    price: number;
    link: string;
}

interface category {
    title: string;
    products: product[];
}

const Categories:category[] = [
    {
        title: 'Бытовая химия',
        products: [
            {
                title: 'Название',
                image: '',
                price: 77440,
                link: ''
            }
        ]
    },
    {
        title: 'Санитайзеры',
        products: []
    },
    {
        title: 'Незамерзающие жидкости',
        products: []
    },
    {
        title: 'Автохимия',
        products: []
    }
]

const Products = () => {
    return (
        <div className={styles.products}>
            <div className={styles.categories}>
                {}
            </div>
        </div>
    );
};

export default Products;