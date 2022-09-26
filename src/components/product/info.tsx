import React, {useCallback, useEffect, useState} from 'react';
import {H1} from "components/shared/fonts/specialFonts";
import {ProductType} from "src/utils/types";
import styled from "styled-components";
import InfoRow from "./infoRow";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {isMobile} from "src/utils/isMobile";
import {ApiMethod} from "src/api/APIMethod";
import {useDispatch} from "react-redux";
import RadioButtons from "components/shared/forms/radioButtons";
import {getAuth} from "src/store/localStorage";
import {WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_AUTHORIZATION} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {GetProduct} from "src/actions/ProductAction/ProductAction";
import {showMoneySum} from "src/utils/functions";

const InfoStyle = styled.div`
  display: grid;
  justify-items: start;
  align-content: start;
  
  .mobile & {
    grid-template-columns: 100%;
  }
`;

const Header = styled(H1)`
  padding: 0;
  text-align: left;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.font.size[32]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.font.color.blue};
  padding: 12px 0;
`;

const Description = styled.div`
  width: 100%;
  position: relative;
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  height: 50px;
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  width: min-content;
  padding: 0 42px;
  
  .mobile & {
    height: 60px;
    width: 100%;
  }
`;

const ButtonSendSuccess = styled(ButtonStyle)`
  box-shadow: 0px 0px 0px 4px rgba(0, 255, 0, 0.2);
`;

const ButtonSendError = styled(ButtonStyle)`
  box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
`;

const ButtonFrozenStyle = styled(ButtonStyle)`
  font-size: ${({ theme }) => theme.font.size[14]};
  background: ${({ theme }) => theme.font.color.light_gray};
  border-color: ${({ theme }) => theme.font.color.gray};
  
  .mobile & {
    white-space: normal;
  }
`;

const Info = (props: {data: ProductType}) => {
    const auth = getAuth();
    const [size, setSize] = useState(0);
    const [button, setButton] = useState<any>(null);
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    const openAuth = () => {
        WindowsManagerOpen(WINDOW_AUTHORIZATION)(dispatch);
    }

    useEffect(() => {
        if (auth.isAuthorized) {
            stableDispatch(GetProduct(props.data.id, size));
        }
    }, [size]);

    const AddToCart = () => {
        button.Animate({Children: 'Добавляем...'});
        ApiMethod({
            func: 'patch',
            data: {
                product_id: props.data.id,
                product_size: size
            },
            url: '/product/api/v2/order/add_product/',
            auth: true
        })
            .then(success => button.Animate({Styled: ButtonSendSuccess, Children: 'Добавлено в корзину', timeOut: 2000}))
            .catch(error => button.Animate({Styled: ButtonSendError, Children: 'Ошибка', timeOut: 2000}))
    }

    return (
        <InfoStyle>
            { isMobile() ? '' : <Header>{props.data.title}</Header>}

            <Price>{props.data.price ? (auth.isAuthorized ? '' : 'от ') + showMoneySum(props.data.price) + ' РУБ' : null}</Price>
            <Description>
                {
                    props.data.description
                        ?
                        <InfoRow title={'Описание'}>
                            {props.data.description}
                        </InfoRow>
                        : null
                }
                {
                    props.data.sizes?.length
                        ?
                        <InfoRow title={'Размеры'}>
                            <RadioButtons setSize={setSize} buttons={props.data.sizes} />
                        </InfoRow>
                        : null
                }
            </Description>
            {
                auth.isAuthorized
                    ? <ButtonBlue styled={ButtonStyle} func={AddToCart} setObj={setButton}>Добавить в корзину</ButtonBlue>
                    : <ButtonBlue styled={ButtonFrozenStyle} func={openAuth}>Чтобы добавить в корзину, авторизуйтесь</ButtonBlue>
            }
        </InfoStyle>
    );
};

export default Info;