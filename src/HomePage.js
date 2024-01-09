import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"

import Slider from "./Slider";
import Footer from "./Footer";
import SiteSection from "./SiteSection";
import FeedbackForm from "./FeedbackForm";
import Sketh from "./Sketh";
import ArticleSliders from "./ArticleSliders";
import Advantages from "./Advantages";
import SaleSection from "./SaleSection";
export default function HomePage(){
    return(
        <body className="page">

            {/*<div className="drawing">*/}
            {/*    <canvas className="drawing__canvas" id='paper-canvas' resize='true' />*/}
            {/*<Sketh/>*/}
            {/*</div>*/}
            <Slider/>
            <h3 className={"site-section__title"}>Разделы сайта</h3>
            <SiteSection/>



            <Advantages/>

            <h3 className={"site-section__callback-title"}>Оставь заявку на <p className={"site-section__callback-subtitle"}>БЕСПЛАТНЫЙ </p>расчёт.</h3>

            <FeedbackForm/>
            <SaleSection/>

            <h3 className={"article-slider__title"}>Обучающие статьи</h3>
            <ArticleSliders/>

        </body>

    )
}
