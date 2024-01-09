import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"

import Slider from "./Slider";
import Footer from "./Footer";
import SiteSection from "./SiteSection";
import FeedbackForm from "./FeedbackForm";
import Sketh from "./Sketh";
import creative_approach_ico from "./img/output-onlinepngtools.png";
import key_work_ico from "./img/keyworkicon.png";
import five_year_ico from "./img/5year.png";
import time_ico from "./img/time-ico.png";
import price_ico from "./img/price-icon.png";
export default function Advantages(){
    return(
        <section className="advantages">

            <h3 className="advantages__title">Почему нам доверяют</h3>
            <div className="advantages__advantages-count">
                <div className="advantages__advantage">
                    <img className="advantages__advantage-img advantages__advantage-img_brush" src={creative_approach_ico}/>
                    <p className="advantages__advantage-title">Креативный подход</p>
                </div>
                <div className="advantages__advantage">
                    <img className="advantages__advantage-img" src={key_work_ico}/>
                    <p className="advantages__advantage-title">Единый контракт</p>
                </div>
                <div className="advantages__advantage">
                    <img className="advantages__advantage-img" src={five_year_ico}/>
                    <p className="advantages__advantage-title">Гарантии качества</p>
                </div>
                <div className="advantages__advantage">
                    <img className="advantages__advantage-img" src={price_ico}/>
                    <p className="advantages__advantage-title">Стоимость работ</p>
                </div>
                <div className="advantages__advantage">
                    <img className="advantages__advantage-img" src={time_ico}/>
                    <p className="advantages__advantage-title">Соблюдение сроков</p>
                </div>
            </div>
        </section>

    )
}