import {ChangeEvent} from "react";
import * as React from 'react';
import styled from "styled-components";

type Props = {
    value: string
    setValue: (value: string) => void
}

export const SearchField: React.FC<Props> = React.memo(({value, setValue}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onClickHandler = () => {
        setValue('')
    }

    return (
        <Search>
            <input value={value} onChange={(e) => onChangeHandler(e)} placeholder={"Search"}/>
            <button disabled={value === ""} onClick={onClickHandler}>Clear</button>
        </Search>
    );
});

const Search = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`