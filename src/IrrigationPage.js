import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import Slider from "./Slider";
import Footer from "./Footer";
import SiteSection from "./SiteSection";
import FeedbackForm from "./FeedbackForm";
export default function IrrigationPage(){
    return(
        <body className="page">
        <Header/>
        <Slider/>
        <FeedbackForm/>
        <Footer/>
        </body>

    )
}