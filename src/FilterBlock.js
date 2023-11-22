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


const MIN = 100
const MAX = 12000
const manufacturerList = ["Rain Bird", "Hunter", "Irritrol", "Pioneer"]

export default function FilterBlock(){
    const [priceValue, setPriceValue] = useState([MIN, MAX])
    return(
        <div className="filter-block">
            <p className="filter-block__title">Системы полива</p>
            <div className="filter-block__navigate-count">
                <div className="filter-block__navigate-subsection">
                    <img className="filter-block__navigate-arrow" src={arrow}/>
                    <p className="filter-block__navigate-text">Дождеватели</p>
                </div>
                <div className="filter-block__navigate-subsection">
                    <img className="filter-block__navigate-arrow" src={arrow}/>
                    <p className="filter-block__navigate-text">Клапаны</p>
                </div>


            </div>

            <div className="filter-block__price">
                <p className="filter-block__title">Цена</p>
                <SliderValve className={"filter-block__price-slider"}
                        onChange={setPriceValue}
                        value={priceValue}
                        min={MIN}
                        max={MAX}/>
            </div>
            <div className="filter-block__price-value-count">
                <p className="filter-block__price-value">{priceValue[0]} руб.</p>
                <p className="filter-block__price-value">{priceValue[1]} руб.</p></div>
            <div className="filter-block__manufacturer">
                <p className="filter-block__title">Производитель</p>
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
