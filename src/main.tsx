import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryContextProvider} from "./context/QueryContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryContextProvider>
            <App/>
        </QueryContextProvider>
    </StrictMode>,
)
