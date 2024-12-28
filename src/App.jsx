import "../src/assets/css/common.css";
import "../src/assets/css/details.css";
import "../src/assets/css/main.css";
import "../src/assets/scss/common.scss";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:countryName" element={<Details />} />   
            </Routes>
        </Router>
        </>
    );
}

export default App;
