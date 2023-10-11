import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import * as ReactDOM from 'react-dom/client'
import {StyleSheetManager} from "styled-components";
import isPropValid from "@emotion/is-prop-valid"
import {GlobalStyle} from "./styles/GlobalStyles";
import {App} from './App.tsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
            <App/>
        </StyleSheetManager>
        <ReactQueryDevtools initialIsOpen={false}/>
        <GlobalStyle/>
    </QueryClientProvider>
)
