import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import close_icon from "./img/close.png"


export default function Popup(props) {


    return (
       <section className={`popup ${props.popupOpen ? 'popup_visible' : ''}`}>
            <div className="popup__page">
                <img className="popup__close-button" src={close_icon} onClick={props.closePopup}/>
                <p className="popup__title">Звони, пиши</p>
                <form className={"popup__form"}>

                    <div className={"popup__input-count"}>
                        <label className={"popup__label popup__label_name"}>
                            Имя
                        </label>
                        <input placeholder={"Введите ваше имя"} className={"popup__input popup__input_name"}/>
                    </div>

                    <div className={"popup__input-count"}>
                        <label className={"popup__label popup__label_number"}>
                            Телефон
                        </label>
                        <input placeholder={"Введите ваш номер телефона"} className={"popup__input popup__input_number"}/>
                    </div>

                    <button className={"popup__button"}>
                        Отправить
                    </button>
                </form>
            </div>
       </section>
    );
}


