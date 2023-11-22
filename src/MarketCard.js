import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import sortByLogo from "./img/sortby.svg"
import img from "./img/market/ip8vklpwht8pf4yp1kckgv40ns6r20wp.jpeg"
import backArrow from "./img/backarrow.svg"

import {Route, Routes} from "react-router-dom";
import HeaderCatalog from "./HeaderCatalog";
import FilterBlock from "./FilterBlock";

export default function MarketCard(){


    return(
        <div className="market-card">
            <div className="market-card_wrapper">
                <a className="market-card__link-count"></a>
                <img className="market-card__img" src={img}/>

                <div className="market-card__price-count">
                    <p className="market-card__price">3 530 ₽</p>
                    <p className="market-card__old-price"> 4 530 ₽ </p>
                </div>

                <h5 className="market-card__title">Pioneer™ HCT-311 - садовый таймер 3/4, 3V, 3"LCD, 1 программа,1-59s/1-300m
                </h5>
                <p  className="market-card__order-wrap">В корзину</p>
            </div>
        </div>
    )
}
