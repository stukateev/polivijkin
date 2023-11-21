import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import sortByLogo from "./img/sortby.svg"
import sortByFilter from "./img/filter.svg"
import backArrow from "./img/backarrow.svg"

import {Route, Routes} from "react-router-dom";
import HeaderCatalog from "./HeaderCatalog";
export default function CatalogSystemPoliv(){

    return(
        <div className="page catalog">
            <HeaderCatalog />
        {/*<SalesSliders/>*/}
            <div className="catalog-system-poliv">

            </div>
        </div>

    )
}
