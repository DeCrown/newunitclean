import React from 'react';
import {Text, Fonts} from "../../../shared/fonts";
import styles from "./infoRow.module.css";

const InfoRow = (props: {title: string; value: string}) => {
    return (
        <div className={styles.infoRow}>
            <Text style={[Fonts.black, Fonts.w600, Fonts.s18]}>{props.title}:</Text>
            <br></br>
            <Text style={[Fonts.black, Fonts.w400, Fonts.s16]}>{props.value}</Text>
        </div>
    );
};

export default InfoRow;