import React, {useState} from 'react';
import {H1} from "components/shared/fonts/specialFonts";
import {ProductType} from "src/utils/types";
import styled from "styled-components";
import InfoRow from "./infoRow";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {isMobile} from "react-device-detect";
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import RadioButtons from "components/shared/forms/radioButtons";
import {getAuth} from "src/store/localStorage";

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

const Info = (props: {data: ProductType}) => {
    const auth = getAuth();
    const [size, setSize] = useState('');
    const [button, setButton] = useState<any>(null);
    const dispatch = useDispatch();

    const AddToCart = () => {
        button.Animate({Children: 'Добавляем...'});
        AppendApiMethod({
            func: 'patch',
            data: {
                product_id: props.data.id,
                product_size: size
            },
            url: '/product/api/v2/order/add_product/',
            success: (success) => {
                button.Animate({Children: 'Добавлено в корзину', timeOut: 2000});
            },
            error: (error) => {
                button.Animate({Children: 'Ошибка', timeOut: 2000});
            }, auth: true})(dispatch);
    }

    return (
        <InfoStyle>
            { isMobile ? '' : <Header>{props.data.title}</Header>}

            <Price>{props.data.price ? props.data.price.toLocaleString() + ' РУБ' : null}</Price>
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
                    : <div>Чтобы добавить в корзину, авторизуйтесь</div>
            }
        </InfoStyle>
    );
};

export default Info;