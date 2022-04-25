import React from 'react';
import styles from './suggestion.module.css';
import {icons} from "../../../utils/icons";
import {Forms} from "../../shared/forms";
import ExpositionEllipse from "../../../icons/exposition_ellipse";

interface suggestionProps {
    title: string;
    background?: string;
    image: string;
    discount: number;
}

const Suggestion = (props:suggestionProps) => {
    return (
        <div className={styles.suggestion}>
            <div className={styles.info}>
                <h1 className={styles.title}>{props.title}</h1>
                <Forms.ButtonBlue>КУПИТЬ</Forms.ButtonBlue>
            </div>
            <div className={styles.exposition}>
                <ExpositionEllipse class={styles.expositionEllipse1} style={props.background ? {fill: props.background} : {}}></ExpositionEllipse>
                <ExpositionEllipse class={styles.expositionEllipse2} style={props.background ? {fill: props.background} : {}}></ExpositionEllipse>
                <img className={styles.image} src={props.image} />
                <div className={styles.discount}>
                    <img src={icons.discount}/>
                    <div>{props.discount}%<br/>off</div>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;