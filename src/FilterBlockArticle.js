import React, {useState} from 'react';
import SliderValve from "react-slider"
import arrow from "./img/angle-right-svgrepo-com.svg"
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import sortByLogo from "./img/sortby.svg"
import sortByFilter from "./img/filter.svg"
import backArrow from "./img/backarrow.svg"

import {Route, Routes} from "react-router-dom";
import HeaderCatalog from "./FilterBlock";



const manufacturerList = ["Rain Bird", "Hunter", "Irritrol", "Pioneer"]

export default function FilterBlockArticle(){

    return(
        <div className="filter-block filter-block-article">
            <div className="filter-block__manufacturer">
                <p className="filter-block__title">Категории статей</p>
                <div className="filter-block__manufacturer-count">
                    {manufacturerList.map((obj) => {
                        return (
                            <p className="filter-block__manufacturer-value">{obj}</p>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
