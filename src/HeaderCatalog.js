import backArrow from "./img/backarrow.svg";
import sortByLogo from "./img/sortby.svg";
import sortByFilter from "./img/filter.svg";
import React from "react";
export default function HeaderCatalog(props){

    return(
        <div>
            <div className="header-catalog__navigate-menu">
                <img className="header-catalog__navigate-back-button" src={backArrow}/>
                <a className="header-catalog__navigate-text header-catalog__navigate-text_a">Каталог</a>
                <p className="header-catalog__navigate-text">/</p>
                <a className="header-catalog__navigate-text header-catalog__navigate-text_a">Системы полива</a>
            </div>
            <div className="header-catalog__top-menu">
                <div className="header-catalog__count">
                    <div className="header-catalog__sort-count">
                        <p className="header-catalog__sort-text">Порядок по умолчанию</p>
                        <img className="header-catalog__sort-icon" src={sortByLogo}/>
                    </div>
                    <img className="header-catalog__filter-icon" src={sortByFilter}/>
                </div>
                <form className="header-catalog__find-form">
                    <button className="header-catalog__find-form-button" type="submit"></button>
                    <input type="search" className="header-catalog__find-form-input"></input>
                </form>
            </div>
        </div>
    )
}

