import {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {PATH} from "./bll/Path";
import {MainPage} from "./UI/MainPage";
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
                    <Route path={PATH.main} element={<MainPage/>}/>
                    <Route path={PATH.posts} element={<PostsList currentPage={currentPage}
                                                          setCurrentPage={setCurrentPage}
                                                          pageSize={pageSize}
                                                          setPageSize={setPageSize}/>}/>
                    <Route path={PATH.postById} element={<Post/>}/>
                    <Route path={PATH["404"]} element={<h1>Page not found</h1>}/>
                    <Route path={"*"} element={<Navigate to={PATH["404"]}/>}/>
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