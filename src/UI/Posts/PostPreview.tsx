import * as React from 'react';
import styled from "styled-components";
import {PostType} from "../../API/postsAPI";
import {useNavigate} from "react-router-dom";


type Props = {
    post: PostType
}

export const PostPreview: React.FC<Props> = ({post}) => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate(`/post/${post.id}`)
    }

    return (
        <p>{post.id}. <Btn onClick={onClickHandler}>{post.title}</Btn></p>
    );
};

const Btn = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  
  &:hover {
    cursor: pointer;
  }
`