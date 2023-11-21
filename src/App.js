import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import Catalog from "./Catalog";
import CatalogSystemPoliv from "./CatalogSystemPoliv";

function App() {


    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                    <Route
                        path="/catalog"
                        element={<Catalog />}
                    />
                    <Route element={<CatalogSystemPoliv />} path="/catalog/system-poliv" />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

