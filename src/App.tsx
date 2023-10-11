import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import {PostsList} from "./UI/Posts/PostsList";
import {Post} from "./UI/Posts/Post";

export const App = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    return (
        <AppWrapper>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PostsList currentPage={currentPage}
                                                          setCurrentPage={setCurrentPage}
                                                          pageSize={pageSize}
                                                          setPageSize={setPageSize}/>}/>
                    <Route path={"/post/:id"} element={<Post/>}/>
                    <Route path={"*"} element={<h1>Page not found</h1>}/>
                </Routes>
            </BrowserRouter>
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`