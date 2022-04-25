import React from 'react';
import {Fonts, Text} from "components/shared/fonts";
import Info from "components/contacts/info";
import Map from "components/contacts/map";

const Contacts = () => {
    return (
        <div className={'content no_up'}>
            <h1><Text style={[Fonts.w900, Fonts.s36, Fonts.black]}>Контакты</Text></h1>

            <div>
                <Info></Info>
                <Map></Map>
            </div>
        </div>
    );
};

export default Contacts;