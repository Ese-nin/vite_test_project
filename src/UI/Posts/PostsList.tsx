import * as React from 'react';
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

export const PostsList: React.FC<Props> = ({currentPage, setCurrentPage, pageSize, setPageSize}) => {

    const {data, isLoading, isSuccess} = usePosts()

    const startCount = currentPage * pageSize - pageSize
    const endCount = currentPage * pageSize

    if (isLoading) return <Loader/>

    if (isSuccess) {

        const piece = data.filter(p => p.id > startCount && p.id <= endCount)

        return (
            <Wrapper>
                <h1>Posts</h1>
                {piece.map(p => <PostPreview key={p.id} post={p}/>)}
                <Pagination postsCount={data.length}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pageSize={pageSize}
                            setPageSize={setPageSize}/>
            </Wrapper>
        )
    }
};

const Wrapper = styled.div`
  height: 100%;

  h1 {
    margin: 0 auto 15px;
  }
`