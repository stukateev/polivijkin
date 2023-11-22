import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import img from "./img/Rectangle 38.png"

import quantityArrow from "./img/arrow-quanity.png"
import plusIcon from "./img/plus.svg"

import {Route, Routes} from "react-router-dom";
import HeaderCatalog from "./HeaderCatalog";
import FilterBlock from "./FilterBlock";

export default function ProductCard(){
    const[instructionState, setInstructionState] = useState("product-card__instruction-link")
    function clickInstruction(){
        if (instructionState==="product-card__instruction-link"){
            setInstructionState("product-card__instruction-link product-card__instruction-link_opened")
        }
        else {
            setInstructionState("product-card__instruction-link")
        }
    }

    return(
        <div className="product-card">
            <div className="product-card__image-count">
                <img className="product-card__image" src={img}/>
            </div>
            <div className="product-card__description-count">
                <h3 className="product-card__title">КонтроллеР HC</h3>
                <p className="product-card__description-text">Контроллер HCC обеспечивает наличие широкого перечня
                    удобных средств для мониторинга масштабн
                    ых проектов — доступ к любому из них можно получить, всего лишь нажав кнопку</p>
                <div className="product-card__price-count">
                    <p className="product-card__new-price">3 530 ₽</p>
                    <p className="product-card__old-price">4 530 ₽</p>
                    <div className="product-card__sale-count">
                        <p className="product-card__sale-price">99 %</p>
                    </div>
                </div>

                <div className="product-card__quantity-count">
                    <img className="product-card__quantity-arrow product-card__quantity-down" src={quantityArrow}/>
                    <div className="product-card__quantity-wrapper">
                        <p className="product-card__quantity-integer">1</p>
                    </div>
                    <img className="product-card__quantity-arrow product-card__quantity-up" src={quantityArrow}/>
                </div>
                <div className="product-card__order-button">
                    <p className="product-card__order-button-text"> Добавить в корзину</p>
                </div>
                <div className="product-card__information-wrapper">
                    <div className="product-card__instruction-count">
                        <p className="product-card__instruction-text"> Инструкция</p>
                        <img onClick={clickInstruction} className="product-card__instruction-image" src={plusIcon}/>
                        <a className={instructionState} >Здесь должна быть ссылка</a>
                    </div>
                    <div className="product-card__instruction-count">
                        <p className="product-card__instruction-text"> Инструкция</p>
                        <img  className="product-card__instruction-image" src={plusIcon}/>
                        <a className="product-card__instruction-link product-card__instruction-link_opened" >Здесь должна быть ссылка</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
