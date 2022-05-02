import React from 'react';
import {SuggestionType} from "components/main/suggestion/type";
import BrowserSuggestion from "components/main/suggestion/browserSuggestion";
import {isMobile} from "react-device-detect";
import MobileSuggestion from "components/main/suggestion/mobileSuggestion";

const Suggestion = (props: SuggestionType) => {
    return (
        isMobile ?
            <MobileSuggestion title={props.title} product={props.product} discount={props.discount} background={props.background}></MobileSuggestion>
            :
            <BrowserSuggestion title={props.title} product={props.product} discount={props.discount} background={props.background}></BrowserSuggestion>
    );
};

export default Suggestion;