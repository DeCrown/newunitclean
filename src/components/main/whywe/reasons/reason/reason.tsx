import React from 'react';
import styles from './reason.module.css';

interface reason {
    icon: string;
    text: string
};

const Reason = (props: reason) => {
    return (
        <div className={styles.reason}>
            <img className={styles.reasonIcon} src={props.icon} />
            <div className={styles.reasonText}>{props.text}</div>
        </div>
    );
};

export default Reason;