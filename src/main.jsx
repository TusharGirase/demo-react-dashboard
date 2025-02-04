import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {PrimeReactProvider} from "primereact/api";
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import './index.css';
import './flags.css';
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <PrimeReactProvider>
                <App/>
            </PrimeReactProvider>
        </BrowserRouter>
    </StrictMode>,
)
