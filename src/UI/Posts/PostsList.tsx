import {useState} from "react";
import * as React from 'react';
import {SearchField} from "../SearchField";
import {Loader} from "../common/Loader";
import styled from "styled-components";
import {usePosts} from "../../API/hooks";
import {Pagination} from "../Pagination";
import {PostPreview} from "./PostPreview";

type Props = {
    currentPage: number
    setCurrentPage: (page: number) => void
    pageSize: number
    setPageSize: (size: number) => void
}

export const PostsList: React.FC<Props> = ({
                                               currentPage,
                                               setCurrentPage,
                                               pageSize,
                                               setPageSize
                                           }) => {

    const [value, setValue] = useState('')

    const {data, isLoading, isSuccess, error} = usePosts()

    const startCount = currentPage * pageSize - pageSize
    const endCount = currentPage * pageSize

    if (isLoading) return <Loader/>

    if (error instanceof Error) console.log(error.message)

    if (isSuccess) {

        const piece = data.filter(p => p.id > startCount && p.id <= endCount)

        const pieceWithSearch = value ?
            piece.filter(p => p.title.includes(value)) :
            piece

        const resultPosts = pieceWithSearch.length ?
            pieceWithSearch.map(p => <PostPreview key={p.id} post={p}/>) :
            <p>Sorry, posts not found. Please, try again with other parameters</p>

        return (
            <Wrapper>
                <h1>Posts</h1>
                <SearchField value={value} setValue={setValue}/>
                {resultPosts}
                <Pagination postsCount={data.length}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pageSize={pageSize}
                            setPageSize={setPageSize}
                            setValue={setValue}/>
            </Wrapper>
        )
    }
};

const Wrapper = styled.div`
  height: 100%;

  h1 {
    margin: 50px auto 15px;
  }
`