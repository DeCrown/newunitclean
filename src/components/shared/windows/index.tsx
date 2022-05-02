import React from 'react';
import {useTypedSelector} from "src/store";

const Windows = () => {
    const active = useTypedSelector((state) => state.windows.active);

    if (active) {
        return active();
    }
    else {
        return <div></div>
    }
};

export default Windows;