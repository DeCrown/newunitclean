import React from 'react';
import BrowserSuggestion from "components/main/suggestion/browserSuggestion";
import {isMobile} from "src/utils/isMobile";
import MobileSuggestion from "components/main/suggestion/mobileSuggestion";
import {SuggestionType} from "src/utils/types";

const Suggestion = (props: SuggestionType) => {
    return (
        isMobile() ?
            <MobileSuggestion title={props.title} product={props.product} background={props.background}></MobileSuggestion>
            :
            <BrowserSuggestion title={props.title} product={props.product} background={props.background}></BrowserSuggestion>
    );
};

export default Suggestion;