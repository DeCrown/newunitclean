import React, {useEffect} from 'react';
import {URLs} from "src/utils/constants";
import Content from "components/special/content";

const Unauthorized = () => {

    useEffect(() => {
        window.open(URLs.ROOT, '_self');
    }, [])

    return (
        <Content>
            Неавторизованное подключение. Вы будете перенаправлены на главную страницу.
        </Content>
    );
};

export default Unauthorized;