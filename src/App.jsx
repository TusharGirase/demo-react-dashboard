import "bootstrap/dist/css/bootstrap-grid.min.css";
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from "./components/Dashboard.jsx";
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";
import {AppProvider} from "./components/AppContext.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import "primereact/resources/themes/lara-light-blue/theme.css"; // ✅ Theme
import "primereact/resources/primereact.min.css"; // ✅ PrimeReact Core
import "primeicons/primeicons.css"; // ✅ PrimeIcons
import "primereact/resources/themes/lara-light-cyan/theme.css";

import {Container} from "react-bootstrap";


function App() {

    return (
        <AppProvider>
            <ResponsiveAppBar/>
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </Container>
        </AppProvider>
    )
}

export default App
