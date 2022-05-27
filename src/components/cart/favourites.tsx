import React, {useCallback, useEffect} from 'react';
import ProductsList from "components/shared/productsList";
import Line from "components/shared/duplicateComponents/line";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {BrowserView, isMobile} from "react-device-detect";
import TabContent from "components/shared/tabsMenu/tabContent";
import {ButtonContainerCenter} from "components/cart/shared/buttonContainers";
import Button from "components/cart/shared/button";
import EmptyBasket from "components/shared/productsList/empty";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {IStateFavourites} from "src/reducers/FavouritesReducer/FavouritesReducer.types";
import {URLs} from "src/utils/constants";
import {GetFavourites} from "src/actions/FavouritesAction/FavouritesAction";

const Favourites = () => {

    const Favourites = useTypedSelector((store) => store.Favourites);
    const {products, isFetching, error} = Favourites as IStateFavourites;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetFavourites());
    }, []);

    return (
        products.length
            ?
            <TabContent>
                <ProductsList products={products} buttons={true}></ProductsList>
                <BrowserView>
                    <Line></Line>
                </BrowserView>
            </TabContent>
            :
            <TabContent>
                <EmptyBasket>Вы не выбрали избранные товары</EmptyBasket>
                {isMobile ?
                    ''
                    :
                    <ButtonContainerCenter>
                        <ButtonBlue styled={Button} func={() => window.open(URLs.CATALOG, '_self')}>Посмотреть товары</ButtonBlue>
                    </ButtonContainerCenter>
                }
            </TabContent>
    );
};

export default Favourites;