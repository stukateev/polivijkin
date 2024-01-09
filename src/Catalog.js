import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"

import Slider from "./Slider";
import Footer from "./Footer";
import SiteSection from "./SiteSection";
import FeedbackForm from "./FeedbackForm";
import ArticleSliders from "./ArticleSliders";
import CatalogMenu from "./CatalogMenu";
import Helmet from "react-helmet"
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CatalogSystemPoliv from "./CatalogSystemPoliv";
import ArticleSlider from "./ArticleSliders";
import {Article} from "@mui/icons-material";


export default function Catalog(){
    return(

            <body className="page catalog">
                <Helmet
                    title="Качественное садовое оборудование : системы автоматического полива, освещения и благоустройства в лучшем интернет-магазине для вашего сада!"
                    meta={[
                        {"name": "description", "content": "Description inserted by helmet"}
                    ]}

                />
                <ArticleSliders/>

                <CatalogMenu />


            </body>

    )
}
