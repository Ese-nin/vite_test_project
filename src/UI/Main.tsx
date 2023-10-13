import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {Wrapper} from "./common/Wrapper";

export const Main = () => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate('/posts')
    }

    return (
        <Wrapper>
            <h1>Posts</h1>
            <button onClick={onClickHandler}>Download posts</button>
        </Wrapper>
    );
};