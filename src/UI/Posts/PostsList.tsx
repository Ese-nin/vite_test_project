import * as React from "react";
import {useState} from "react";
import {Wrapper} from "../common/Wrapper";
import {usePosts} from "../../API/hooks";
import {Loader} from "../common/Loader";
import {Pagination} from "../Pagination";
import {SearchField} from "../SearchField";
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