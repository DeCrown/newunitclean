import React from 'react';
import styles from './whywe.module.css';
import Reason from "./reasons/reason/reason";

interface reason {
    icon: string;
    text: string
};
const Reasons:reason[] = [
    {icon: '', text: 'Высокое качество продукции за разумную цену.'},
    {icon: '', text: 'Оперативность и гибкая система оплаты, возможность протестировать продукт.'},
    {icon: '', text: 'Индивидуальный подход к каждому клиенту. '},
    {icon: '', text: 'Возможна разработка продукта по запросу клиента.'}
];

const WhyWe = () => {
    return (
        <div className={styles.whyWe}>
            <h2 className='h1'>Почему выбирают нас?</h2>
            <div className={styles.whyWeContainer}>
                { Reasons.map((reason, i) => <Reason key={i} icon={reason.icon} text={reason.text}></Reason>) }
            </div>
        </div>
    );
};

export default WhyWe;