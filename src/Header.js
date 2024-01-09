import React from "react";
import logo from "./img/logo.png"
import cell from "./img/svg-cell).svg"
import loupe from "./img/svg-loupe).svg"
import burger from "./img/burger.svg"
import {BrowserRouter as Router, Route, Routes, useNavigate, useParams} from 'react-router-dom';
import BurgerMenu from "./BurgerMenu";
export default  function Header (props){
    const navigate = useNavigate()
    const { serviceName } = useParams()
    return(
        <header className="header">

            <div className="top-menu">
                <img className="top-menu__burger-button" onClick={props.openBurger} src={burger}/>
                <a className="logo  logo_place_header"
                   onClick={() => navigate('/')}>
                    <img className="logo__img" src={logo}/>
                        <div className="logo__description">
                            <p className="logo__title">Поливайкин</p>
                            <h1 className="logo__subtitle">Благоустройство приусадбенных участков</h1>
                        </div>
                </a>
                <form className="find-form find-form_place_top-menu">
                    <button className="find-form__button find-form__button_place_header" type="submit"></button>
                    <input type="search" className="find-form__input find-form__input_place_header"></input>
                </form>

                <img src={loupe} className="find-form-button_mobile"/>
                <button className="callback-button callback-button_desktop" onClick={props.openPopup}> Заказать звонок</button>
                <img src={cell} className="callback-button_mobile" onClick={props.openPopup}/>
                <button className="button-shopping-cart"><span className="value-items-in-cart"></span></button>
            </div>

            <nav className={ props.noBackgroundImage ? ("menu-block menu-block_service") :("menu-block") }>
                <ul className={ props.noBackgroundImage ? ("menu-block__menu menu-block__menu_service") :("menu-block__menu") }>
                    <li className="menu-block__nav-button">
                        <a className="menu-block__nav-button-link"
                                                              onClick={() => navigate('/')}>Главная</a></li>
                    <li className="menu-block__nav-button">
                        <a className="menu-block__nav-button-link">Услуги</a>
                        <ul className="menu-block__drop-down-menu">
                            <li className="menu-block__drop-down-button"
                                onClick={() => navigate('/uslugi/landscape-light')}><a
                                className="menu-block__drop-down-button_link">Уличное освещение</a></li>

                            <li className="menu-block__drop-down-button"
                                onClick={() => navigate('/uslugi/landscape-design')}><a
                                className="menu-block__drop-down-button_link">Ландшафтный дизайн</a></li>

                            <li className="menu-block__drop-down-button"
                                onClick={() => navigate('/uslugi/irrigation')}><a
                                className="menu-block__drop-down-button_link">Системы полива</a></li>

                            <li className="menu-block__drop-down-button"
                                onClick={() => navigate('/uslugi/bath')}><a
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