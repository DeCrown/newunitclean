import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {icons} from "src/utils/icons";
import {INPUT_TEXT_STYLE} from "components/shared/forms/primitives/INPUT_TEXT";
import {ProductType} from "src/utils/types";
import {URLs} from "src/utils/constants";
import React from "react";
import {DefaultInputTextStyle} from "components/shared/forms/inputText";

export const HeaderSearchStyle = styled.div`
  display: grid;
  background: #ADB8C4;
  grid-template-rows: 64px;
  color: #000;
  height: 64px;
  grid-template-columns: 26% auto 18%;
  align-items: center;
`;

export const ButtonSearchStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  width: min-content;
  height: 42px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  
  font-size: ${({ theme }) => theme.font.size[15]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
`;

export const SearchContainer = styled.div`
  padding: 0 30px 0 55px;
  position: relative;
`;

export const SearchInputTextContainerStyle = styled(DefaultInputTextStyle)`
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 50px;
    height: 42px;
    background-image: url(${icons.search_gray});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const SearchInputTextStyle = styled(INPUT_TEXT_STYLE)`
  height: 42px;
  padding-left: 50px;
`;

export const SearchResults = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: grid;
  padding: 12px;
  position: absolute;
  top: calc(100% + 20px);
  width: calc(100% - 79px);
`;

export const SearchNoResults = styled.div`
  padding: 12px;
  cursor: pointer;
  border-radius: 10px;
  font-style: italic;

  color: ${({ theme }) => theme.font.color.black};
`;

export const SearchResultStyle = styled(SearchNoResults)`
  font-style: normal;
  transition: background-color 0.2s;
  color: ${({ theme }) => theme.font.color.black};
  &:hover {
    background: #e6e6e6;
  }
  
  .mobile & {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const SearchButtons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px; gap: 10px;
  justify-content: start;
  margin-left: 30px;
`;

export const SearchResult = (props: {product: ProductType}) => {
    const click = () => {
        window.open(URLs.PRODUCT.replace(':id', '' + props.product.id));
    }

    return (<SearchResultStyle onClick={click}>
        {props.product.title}
    </SearchResultStyle>)
}