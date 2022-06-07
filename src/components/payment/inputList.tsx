import React, {useCallback, useEffect, useState} from 'react';
import {
    InputAddress,
    InputFIO,
    InputPhoneNumber, InputPromoCode, InputState, OutputDetail,
} from "components/shared/forms/inputText";
import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {Select} from "components/shared/forms/select";
import {useDispatch} from "react-redux";
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {icons} from "src/utils/icons";
import {useTypedSelector} from "src/store/configureStore";
import {IStateCart} from "src/reducers/CartReducer/CartReducer.types";
import {GetCart} from "src/actions/CartAction/CartAction";
import {URLs} from "src/utils/constants";
import {WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_AUTHORIZATION} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {getAuth} from "src/store/localStorage";

const InputListStyle = styled.div`
  display: grid;
  grid-gap: 20px; gap: 20px;
  justify-content: end;
  justify-self: start;
  align-content: end;
  width: 370px;

  & input {
    min-width: 370px;
    width: auto;
  }

  .mobile & {
    justify-content: normal;
    width: 100%;
    
    & input {
      width: calc(100% - 40px);
      min-width: 0px;
    }
  }
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  height: 47px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  /*margin-top: 40px;*/
  
  .mobile & {
    margin: 0;
  }
  
  .emptyCart &, .unauthed & {
    display: none;
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
  display: none;

  .mobile & {
    white-space: normal;
  }
`;

const ButtonFrozenStyleUnAuthed = styled(ButtonFrozenStyle)`
  .unauthed & {
    display: grid;
  }
`;

const ButtonFrozenStyleEmptyCart = styled(ButtonFrozenStyle)`
  .emptyCart & {
    display: grid;
  }

  .unauthed & {
    display: none !important;
  }
`;

const SuccessPromoStyle = styled.div`
  border: 1px solid rgba(0,0,0,0.3);
  height: 47px;
  background: #FFFFFF;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: black;
  padding: 0 20px;
  width: calc(100% - 40px);
  display: grid;
  align-content: center;
  position: relative;
`;

const SuccessPromoText = styled.div`
  
`;

const SuccessPromoDrop = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  display: grid;
  align-content: center;
  padding-right: 12px;
  cursor: pointer;
`;

const SuccessPromo = (props: {text: string; func: () => void}) => {

    return (
        <SuccessPromoStyle>
            <SuccessPromoText>{props.text}</SuccessPromoText>
            <SuccessPromoDrop><img src={icons.dropInput} onClick={props.func} /></SuccessPromoDrop>
        </SuccessPromoStyle>
    )
}

const InputList = () => {
    const form:any = {};

    const auth = getAuth();
    let setFio, setPhone, setAddress, setReceivingType, setPaymentType, setDetail, setMessage = null;
    [form.full_name, setFio] = useState<any>(null);
    [form.phone_number, setPhone] = useState<any>(null);
    [form.address, setAddress] = useState<any>(null);
    [form.receiving_type, setReceivingType] = useState<any>(null);
    [form.payment_type, setPaymentType] = useState<any>(null);
    [form.detail, setDetail] = useState<any>(null);
    [form.message, setMessage] = useState<any>(null);

    const [promo, setPromo] = useState<any>(null);
    const [successPromo, setSuccessPromo] = useState('');
    const [button, setButton] = useState<any>(null);

    const Cart = useTypedSelector((store) => store.Cart);
    const {cart, isFetching, error} = Cart as IStateCart;

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetCart());
    }, []);

    useEffect(() => {
        if (promo && promo.value && !promo.active && !promo.error) {
            addPromo()
        }
    }, [promo]);

    const openAuth = () => {
        WindowsManagerOpen(WINDOW_AUTHORIZATION)(dispatch);
    }

    const dropPromo = () => {
        AppendApiMethod({
            func: 'delete', url: '/product/api/v2/order/delete_promo_code/',
            success: (success) => {
                setSuccessPromo('')
            },
            error: (error) => {
                setSuccessPromo('')
            }, auth: true
        })(dispatch);
    }

    const addPromo = () => {
        AppendApiMethod({
            func: 'patch', url: '/product/api/v2/order/add_promo_code/',
            data: {
                promo_code: promo.value
            },
            success: (success) => {
                setSuccessPromo(success.promo_code)
            },
            error: (error) => {
                promo.obj.setState({error: true});
            }, auth: true
        })(dispatch);
    }

    const order = () => {
        if (Object.values(form).map(value => !value || (value as InputState).obj.checkError()).some(error => error)) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        AppendApiMethod({
            func: 'patch', url: '/product/api/v2/order/',
            data: Object.keys(form).reduce((target, key) => ({...target, [key]: form[key].value}), {}),
            success: (success) => {
                Object.values(form).map(value => (value as InputState).obj.clear());
                setSuccessPromo('');
                button.Animate({Styled: ButtonSendSuccess, Children: 'Заказ оформлен', timeOut: 2000});
            },
            error: (error) => {
                Object.keys(error.response.data).map(key => {
                    if (form[key]) {
                        form[key].obj.setError(error.response.data[key]);
                    }
                });
                button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            }, auth: true
        })(dispatch);
    }

    const toCart = () => {
        window.open(URLs.CART, '_self');
    }

    return (
        <InputListStyle className={(auth.isAuthorized ? '' : 'unauthed ') + (cart.product.length ? '' : 'emptyCart')}>
            <InputFIO placeholder={'Укажите ваше ФИО'} setObj={setFio}></InputFIO>
            <InputPhoneNumber placeholder={'Укажите ваш номер телефона'} setObj={setPhone}></InputPhoneNumber>
            <Select defaultOption={{value: '', text: 'Выберите способ доставки'}} setObj={setReceivingType} options={[
                {value: 'САМОВЫВОЗ', text: 'Самовывоз'},
                {value: 'ДОСТАВКА', text: 'Доставка'}
            ]}></Select>
            <InputAddress placeholder={'Укажите адрес доставки'} setObj={setAddress}></InputAddress>
            <Select defaultOption={{value: '', text: 'Выберите способ оплаты'}} setObj={setPaymentType} options={[
                {value: 'КАРТОЙ', text: 'Картой'},
                {value: 'НАЛИЧНЫМИ', text: 'Наличными'}
            ]}></Select>
            {
                successPromo ?
                    <SuccessPromo text={successPromo} func={dropPromo} />
                    :
                    <InputPromoCode placeholder={'Введите промокод'} setObj={setPromo}></InputPromoCode>
            }
            <OutputDetail setObj={setMessage}></OutputDetail>
            <OutputDetail setObj={setDetail}></OutputDetail>
            <ButtonBlue styled={ButtonStyle} func={order} setObj={setButton}>Заказать</ButtonBlue>
            <ButtonBlue styled={ButtonFrozenStyleUnAuthed} func={openAuth}>Авторизуйтесь, чтобы оформить заказ</ButtonBlue>
            <ButtonBlue styled={ButtonFrozenStyleEmptyCart} func={toCart}>Добавьте товары в корзину</ButtonBlue>
        </InputListStyle>
    );
};

export default InputList;