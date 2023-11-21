import React from "react";
import logo from "./img/logo.png"
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
export default  function Header (){
    const navigate = useNavigate()
    return(
        <header className="header">
            <div className="top-menu">
                <a className="logo logo_place_top-menu"
                   onClick={() => navigate('/')}>
                    <img className="logo__img" src={logo}/>
                        <div className="logo__description">
                            <h1 className="logo__title">Поливайкин</h1>
                            <h2 className="logo__subtitle">Благоустройство приусадбенных участков</h2>
                        </div>
                </a>

                <form className="find-form find-form_place_top-menu">

                    <button className="find-form__button find-form__button_place_header" type="submit"></button>
                    <input type="search" className="find-form__input find-form__input_place_header"></input>

                </form>
                <div className="login"></div>
                <div className="number"></div>

                <button className="callback-button"> Заказать звонок</button>

                <button className="button-shopping-cart"><span className="value-items-in-cart"></span></button>

            </div>

            <nav className="menu-block">
                <ul className="menu-block__menu">
                    <li className="menu-block__nav-button"><a className="menu-block__nav-button-link"
                                                              onClick={() => navigate('/')}>Главная</a></li>
                    <li className="menu-block__nav-button">
                        <a className="menu-block__nav-button-link">Услуги</a>
                        <ul className="menu-block__drop-down-menu">
                            <li className="menu-block__drop-down-button"
                                onClick={() => navigate('/landscape-light')}><a
                                className="menu-block__drop-down-button_link">Уличное освещение</a></li>

                            <li className="menu-block__drop-down-button"
                                onClick={() => navigate('/landscape-design')}><a
                                className="menu-block__drop-down-button_link">Ландшафтный дизайн</a></li>

                            <li className="menu-block__drop-down-button"
                                onClick={() => navigate('/irrigation')}><a
                                className="menu-block__drop-down-button_link">Системы полива</a></li>

                            <li className="menu-block__drop-down-button"
                                onClick={() => navigate('/bath')}><a
                                className="menu-block__drop-down-button_link">Бассейны и водоёмы</a></li>
                        </ul>
                    </li>
                    <li className="menu-block__nav-button"><a className="menu-block__nav-button-link"
                                                              onClick={() => navigate('/catalog')} >Каталог</a></li>
                    <li className="menu-block__nav-button"
                        onClick={() => navigate('/article')}><a className="menu-block__nav-button-link">Статьи</a></li>
                    <li className="menu-block__nav-button"><a className="menu-block__nav-button-link">Контакты</a></li>
                </ul>
            </nav>
        </header>
    )
}