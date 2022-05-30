import styled from "styled-components";
import {InputText} from "components/shared/forms/inputText";
import React, {useState} from "react";
import {URLs} from "src/utils/constants";

const SearchStyle = styled.div`
  display: grid;
  padding: 60px 40px;
  
  .mobile & {
    padding: 0px;
  }
`;

const BottomSearch = () => {
    const [searchInput, setSearchInput] = useState<any>(null);

    const search = (event: any) => {
        event.preventDefault();
        window.open(URLs.SEARCH_WITH_PARAM.replace(':search', searchInput.value), '_self');
    }

    return (
        <SearchStyle>
            <form onSubmit={search} >
                <InputText placeholder='Поиск' setObj={setSearchInput}></InputText>
            </form>
        </SearchStyle>
    )
}

export default BottomSearch;