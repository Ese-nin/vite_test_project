import * as React from 'react';
import styled, {css} from "styled-components";

type Props = {
    postsCount: number
    currentPage: number
    pageSize: number
    setPageSize: (size: number) => void
    setCurrentPage: (page: number) => void
}

export const Pagination: React.FC<Props> = ({
                                                postsCount,
                                                currentPage,
                                                pageSize,
                                                setPageSize,
                                                setCurrentPage
                                            }) => {

    const pagesCount = Math.ceil(postsCount / pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onClickHandler = (page: number) => {
        setCurrentPage(page)
    }

    const onSelectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const size = +e.target.value
        setPageSize(size)
        setCurrentPage(1)
    }

    const prevHandler = () => {
        setCurrentPage(currentPage - 1)
    }

    const nextHandler = () => {
        setCurrentPage(currentPage + 1)
    }

    return (
        <Pages>
            <button disabled={currentPage === 1} onClick={prevHandler}>prev</button>
            {pages.map(p =>
                <Page key={p}
                      active={p === currentPage ? "true" : ""}
                      onClick={() => onClickHandler(p)}>{p}</Page>
            )}
            <button disabled={currentPage === pagesCount} onClick={nextHandler}>next</button>

            <select defaultValue={"10"} onChange={(e) => onSelectChangeHandler(e)} name="page_size"
                    id="page_size">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        </Pages>
    );
};

const Pages = styled.div`
  margin: 20px;

  display: flex;
  justify-content: center;
  gap: 15px;
`

const Page = styled.button<{ active: string }>`
  ${props => props.active && css`
    background: limegreen;
    border: none`
  }
`