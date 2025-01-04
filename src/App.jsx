import "../src/assets/css/common.css";
import "../src/assets/css/details.css";
import "../src/assets/css/main.css";
import "../src/assets/scss/common.scss";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HOME_PAGE_PATH, COUNTRY_DETAILS_PATH } from "./assets/const";

function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path={HOME_PAGE_PATH} element={<Home />} />
                <Route path={COUNTRY_DETAILS_PATH} element={<Details />} />   
            </Routes>
        </Router>
        </>
    );
}

export default App;
