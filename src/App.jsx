import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from "./components/Dashboard.jsx";
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";
import {AppProvider} from "./components/AppContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Router, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

function App() {

    return (
        <AppProvider>
            <ResponsiveAppBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </AppProvider>
    )
}

export default App
