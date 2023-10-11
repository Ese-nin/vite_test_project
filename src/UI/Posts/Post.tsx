import * as React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Loader} from "../common/Loader";
import styled from "styled-components";
import {usePost} from "../../API/hooks";


export const Post = () => {

    const navigate = useNavigate()
    const {id} = useParams()

    const {data, isLoading, isSuccess, error} = usePost(id)

    const onClickHandler = () => {
        navigate(-1)
    }

    if (isLoading) return <Loader/>

    if (error) console.log(error.message)

    if (isSuccess) return (
        <Container>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <button onClick={onClickHandler}>back</button>
        </Container>
    );
};

const Container = styled.div`
  height: 100%;
  max-width: 500px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
  h2 {
    margin: 0 auto;
  }
`