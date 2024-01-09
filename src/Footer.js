import React from "react";
import logo from "./img/logo.png";
import {useNavigate} from "react-router-dom";

export default  function Footer (props){
    const navigate = useNavigate()
    return(
        <footer className="footer">
            <div className="footer__left-count">
                <a className="logo logo_place_footer"
                   onClick={() => navigate('/')}>
                    <img className="logo__img logo__img_place_footer" src={logo}/>
                    <div className="logo__description logo__description_place_footer">
                        <h1 className="logo__title logo__title_place_footer">Поливайкин</h1>
                        <h2 className="logo__subtitle logo__subtitle_place_footer">Благоустройство приусадбенных участков</h2>
                    </div>
                </a>
                <button className="footer__callback footer__callback_left">
                    Обратный звонок
                </button>
            </div>
            <div className="footer__navigate footer__info">
                <a className="footer__navigate-title footer__info-title">Покупателю </a>
                <ul className="footer__navigate-count footer__info-count">
                    <li className="footer__navigate-link footer__info-link">Условия возврата и гарантии</li>
                    <li className="footer__navigate-link footer__info-link">Услуги</li>
                    <li className="footer__navigate-link footer__info-link">Каталог</li>
                    <li className="footer__navigate-link footer__info-link">Дилерам</li>
                    <li className="footer__navigate-link footer__info-link">Статьи</li>

                </ul>
            </div>
            <div className="footer__company-info footer__info">
                <a className="footer__company-info-title footer__info-title">О компании </a>
                <ul className="footer__company-info-count footer__info-count">
                    <li className="footer__company-info-link footer__info-link">Контакты</li>
                    <li className="footer__company-info-link footer__info-link">Правовая информация</li>
                    <li className="footer__company-info-link footer__info-link">Лицензии и сертификаты</li>
                </ul>
            </div>
            <button className="footer__callback footer__callback_right"
                    onClick={props.openPopup}>

                Обратный звонок
            </button>
        </footer>
    )
}