import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {GlobalStyle} from "./styles/GlobalStyles";
import {App} from './App.tsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <App/>
        <ReactQueryDevtools initialIsOpen={false}/>
        <GlobalStyle/>
    </QueryClientProvider>
)
