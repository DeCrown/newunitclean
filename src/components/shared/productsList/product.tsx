import React, {useCallback} from 'react';
import {icons} from "src/utils/icons";
import styled from "styled-components";
import {ProductType} from "src/utils/types";
import {BASE_URL, URLs} from "src/utils/constants";
import {AppendApiMethod} from "src/actions/ApiMethodAction/ApiMethodAction";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "src/store/configureStore";
import {IStateFavourites} from "src/reducers/FavouritesReducer/FavouritesReducer.types";
import {GetCart} from "src/actions/CartAction/CartAction";
import {GetFavourites} from "src/actions/FavouritesAction/FavouritesAction";
import {showMoneySum} from "src/utils/functions";

const ButtonsContainer = styled.div`
  position: relative;
`;

const ProductStyle = styled.a`
  position: relative;
  height: 350px;
  width: 270px;
  background: white;
  box-shadow: 0px 9px 18px 7px rgba(0, 0, 0, 0.17);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 50% 50%;
  margin-bottom: 0px;
  cursor: pointer;
  transition: box-shadow 0.2s;
  text-decoration: none;
  
  &:hover {
    box-shadow: 0px 9px 18px 7px rgba(0, 0, 0, 0.3);
  }
  
  .mobile .withButtons & {
    width: auto;
    height: 176px;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
    margin-bottom: 0;
  }
  
  /*.withButtons & {
    margin-bottom: 90px;
  }*/
`

const Image = styled.div<{src: string}>`
  margin: 26px 12px 0 12px;
  position: relative;
  background-color: rgba(196, 196, 196, 0.23);
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  .mobile .withButtons & {
    margin: 14px;
  }
`

const Info = styled.div`
  display: grid;
  grid-template-rows: 24% 44% 32%;
  padding: 0 26px;
  
  .mobile .withButtons & {
    grid-template-rows: 30% 38% 32%;
    padding: 0 40px 0 0;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  color: ${({ theme }) => theme.font.color.black};
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  align-self: center;

  overflow: hidden;
  text-overflow: ellipsis;

  .mobile .withButtons & {
    font-size: ${({ theme }) => theme.font.size[14]};
  }
`

const Description = styled.div`
  text-align: left;
  line-height: 26px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  .mobile .withButtons & {
    align-self: center;
    font-size: ${({ theme }) => theme.font.size[12]};
    line-height: normal;
  }
`

const Price = styled.div`
  display: grid;
  align-content: center;
  justify-content: right;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  color: ${({ theme }) => theme.font.color.blue};
  
  .mobile .withButtons & {
    justify-content: start;
  }
`

const Buttons = styled.div`
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  align-content: center;
  height: 90px;
  margin: 0 26px;
  
  .mobile & {
    margin: 0;
    height: 100%;
    position: absolute;
    grid-auto-flow: row;
    right: 0;
    top: 0;
    align-content: space-between;
    justify-items: end;
  }
`

const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 9px 18px 7px rgba(0, 0, 0, 0.17);
  cursor: pointer;
  display: grid;
  align-content: center;
  justify-content: center;
  opacity: 0.7;

  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  color: ${({ theme }) => theme.font.color.blue};

  &:hover {
    opacity: 1;
  }
  
  .mobile .withButtons & {
    background: none;
    box-shadow: none;
  }
`

const ButtonDelete = styled(Button)``

const ButtonFavourite = styled(Button)``

const Counter = styled.div`
    
`;

const ButtonInfoStyle = styled(Button)`
  width: auto;
  padding: 0 20px;
  opacity: 1;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 10px; gap: 10px;
  
  .mobile & {
    grid-auto-flow: row;
    padding: 0;
  }
`;

const Size = styled.div`
`;

const SizeHeader = styled.div`
  font-size: ${({ theme }) => theme.font.size[8]};
`;

const SizeValue = styled.div`
  
`;

const ButtonInfo = (props: {size?: string; count?: number}) => {
    return <ButtonInfoStyle>
        { props.size ?
            <Size>
                <SizeHeader>размер</SizeHeader>
                <SizeValue>{props.size}</SizeValue>
            </Size>
            :null
        }
        { props.count ?
            <Counter>{props.count} шт.</Counter>
            :null
        }
    </ButtonInfoStyle>
}

const StarStyle = styled.div`
  background-image: url(${icons.star});
  position: absolute;
  width: 86px;
  height: 86px;
  z-index: 1;

  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[800]};
  color: ${({ theme }) => theme.font.color.white};

  display: grid;
  align-content: center;
  transform: rotate(-33deg);
`;

const Star = (props: {children: string}) => {
    return <StarStyle>
        {props.children}
    </StarStyle>
}

export const Product = (props: {data: ProductType; noStar?: boolean}) => {

    return (
        <ProductStyle href={URLs.PRODUCT.replace(':id', '' + props.data.id)}>
            {
                props.data.discount && !props.noStar ?
                    <Star>{props.data.discount}</Star>
                    :
                    null
            }
            <Image src={props.data.image ? BASE_URL + props.data.image : ''} />
            <Info>
                <Title>{props.data.title}</Title>
                <Description>{props.data.description}</Description>
                {
                    props.data.order_size_price ?
                        <Price>{showMoneySum(props.data.order_size_price)} РУБ</Price>
                        : props.data.price ?
                            <Price>от {showMoneySum(props.data.price)} РУБ</Price>
                            : null
                }
            </Info>
        </ProductStyle>
    );
}

export const ProductWithButtons = (props: {data: ProductType; onlyFavourite?: boolean}) => {

    const Favourites = useTypedSelector((store) => store.Favourites);
    const {products} = Favourites as IStateFavourites;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    const DeleteFromCart = () => {
        AppendApiMethod({func: 'patch',
            data: {
                product_id: props.data.id,
                product_size: props.data.product_order_size_id,
                decrease_amount: true
            }, url: '/product/api/v2/order/add_product/',
            success: (success) => {
                stableDispatch(GetCart());
            },
            error: (error) => {
            }, auth: true})(dispatch);
    }

    const IsFavourite = () => {
        return Boolean(products.find(product => product.id == props.data.id))
    }

    const MarkAsFavourite = () => {
        if (IsFavourite()) {
            AppendApiMethod({
                func: 'delete', url: '/product/api/v2/favorite_products/' + props.data.id + '/', data: {product_id: props.data.id},
                success: (success) => {
                    stableDispatch(GetFavourites());
                },
                error: (error) => {
                }, auth: true
            })(dispatch);
        }
        else {
            AppendApiMethod({
                func: 'post', url: '/product/api/v2/favorite_products/' + props.data.id + '/',
                success: (success) => {
                    stableDispatch(GetFavourites());
                },
                error: (error) => {
                }, auth: true})(dispatch);
        }
    }

    return (
        <ButtonsContainer>
            <Product data={props.data}></Product>
            <Buttons>
                <ButtonDelete onClick={DeleteFromCart}>
                    <img src={icons.delete}/>
                </ButtonDelete>
                <ButtonInfo size={props.data.product_order_size} count={props.data.amount_of_product} />
                <ButtonFavourite onClick={MarkAsFavourite}>
                    <img src={IsFavourite() ? icons.favourite : icons.not_favourite}/>
                </ButtonFavourite>
            </Buttons>
        </ButtonsContainer>
    );
}