import React, {useCallback, useEffect} from 'react';
import styled from "styled-components";
import {HEADER_STYLE} from "components/shared/fonts/specialFonts";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {IStateMostTrading} from "src/reducers/MostTradingReducer/MostTradingReducer.types";
import {GetMostTrading} from "src/actions/MostTradingAction/MostTradingAction";
import {BASE_URL, URLs} from "src/utils/constants";

const BannerStyle = styled.div`
  min-height: 184px;
  background: #A5AFBA;
  display: flex;
  padding: 30px 75px 30px 150px;
  margin-top: 146px;
  flex-wrap: wrap-reverse;
  grid-gap: 20px;
`;

const Info = styled.div`
  display: grid;
  align-content: space-between;
  justify-items: left;
  grid-gap: 20px;
  width: 40%;
`;

const Title = styled.div`
  ${HEADER_STYLE};
  font-size: ${({ theme }) => theme.font.size[32]};
  padding: 0;
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  text-align: left;
`;

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  height: 40px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  width: 200px;
`;

const ImageContainer = styled.div`
  height: 184px;
  width: 500px;
  position: relative;
`;

const Image = styled.div`
  width: 500px;
  background: rgba(196, 196, 196, 0.23);
  align-self: end;
  flex-shrink: 0;
  height: 360px;
  display: grid;
  align-content: center;
  justify-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Banner = (props: {header: string; text: string}) => {

    const MostTrading = useTypedSelector((store) => store.MostTrading);
    const {products} = MostTrading as IStateMostTrading;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => {
        stableDispatch(GetMostTrading());
    }, []);

    const open = (product_id: number) => {
        window.open(URLs.PRODUCT.replace(':id', '' + product_id), '_self')
    }

    if (products.length) {
        return (
            <BannerStyle>
                <Info>
                    <Title>{props.header}</Title>
                    <Text>{props.text}</Text>
                    <ButtonBlue styled={ButtonStyle} func={() => open(products[0].id)}>Подробнее</ButtonBlue>
                </Info>
                <ImageContainer>
                    <Image>
                        <img src={BASE_URL + products[0].image}></img>
                    </Image>
                </ImageContainer>
            </BannerStyle>
        );
    }
    else {
        return <div></div>
    }
};

export default Banner;