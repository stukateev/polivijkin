import React from "react";
import {  useNavigate } from 'react-router-dom';

const path_name = "http://localhost:3000"

export default  function BurgerMenu (props){
    const navigate = useNavigate()
    const active_page = window.location.href
    function activatedPageCategory (link){

        if (path_name+link === active_page){
            return ("burger-menu__nav-button_activated")
        }
            return ("")
    }





    return(

            <div className={`burger-menu ${props.burgerOpen ? 'burger-menu_visible' : ''}`}>
                <ul className="burger-menu__menu">
                    <li className={"burger-menu__nav-button" + " " +activatedPageCategory("/")}
                        onClick={() => navigate('/')}>
                        <a className="burger-menu__nav-button-link"
                           >Главная</a></li>
                    <li className={"burger-menu__nav-button" + " " +activatedPageCategory("/uslugi")}
                        onClick={() => navigate('/uslugi')}>
                        <a className="burger-menu__nav-button-link">Услуги</a>
                    </li>
                    <li className={"burger-menu__nav-button" + " " +activatedPageCategory("/catalog")}
                        onClick={() => navigate('/catalog')}>
                        <a className="burger-menu__nav-button-link">Каталог</a>
                    </li>
                    <li className={"burger-menu__nav-button" + " " +activatedPageCategory("/article")}
                        onClick={() => navigate('/article')}>
                        <a className="burger-menu__nav-button-link">Статьи</a>
                    </li>
                    <li className={"burger-menu__nav-button" + " " +activatedPageCategory("/contact")}
                        onClick={() => navigate('/contact')}>
                        <a className="burger-menu__nav-button-link">Контакты</a>
                    </li>
                </ul>
            </div>
    )
}