import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import Sketh from "./Sketh";
import Slider from "./Slider";
import Footer from "./Footer";
import SiteSection from "./SiteSection";
import FeedbackForm from "./FeedbackForm";
export default function HomePage(){
    return(
        <body className="page">

            {/*<div className="drawing">*/}
            {/*    <canvas className="drawing__canvas" id='paper-canvas' resize='true' />*/}
            {/*    <Sketh/>*/}
            {/*</div>*/}
            <Slider/>
            <SiteSection/>
            <FeedbackForm/>

        </body>

    )
}
