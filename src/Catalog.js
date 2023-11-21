import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"

import Slider from "./Slider";
import Footer from "./Footer";
import SiteSection from "./SiteSection";
import FeedbackForm from "./FeedbackForm";
import SalesSliders from "./SalesSliders";
import CatalogMenu from "./CatalogMenu";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CatalogSystemPoliv from "./CatalogSystemPoliv";


export default function Catalog(){
    return(

            <body className="page catalog">

            {/*<SalesSliders/>*/}
            <Routes>
                <Route element={<CatalogMenu />} path="/" />

            </Routes>

            </body>

    )
}
