import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import sortByLogo from "./img/sortby.svg"
import img from "./img/market/ip8vklpwht8pf4yp1kckgv40ns6r20wp.jpeg"
import backArrow from "./img/backarrow.svg"

import {Route, Routes} from "react-router-dom";
import HeaderCatalog from "./HeaderCatalog";
import FilterBlock from "./FilterBlock";
import MarketCard from "./MarketCard";

export default function MarketCatalog(){

    return(
            <div className="market-catalog">
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
            </div>
    )
}
