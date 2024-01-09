import sales_image from "./img/landscape/shutterstock_1162697149_edited.jpg";
import React from "react";


export default function SaleSection(){
return(
    <section className="sale-section">
        <div className="sale-section__img-count">
            <img src={sales_image} className="sale-section__img"/>
        </div>
        <div className="sale-section__text-count">
            <h3 className="sale-section__title">Акция</h3>
            <p className="sale-section__description">Заказывая проект ландшафтного дизайна, вы получаете море вдохновения и <p className="sale-section__description sale-section__description_blue"> проект системы автоматического полива в подарок! </p>Это не только прекрасный ландшафт вокруг дома, но и заботливый полив, адаптированный к потребностям каждого растения.</p>
            <button className="main-service-section__button">Оставить заявку</button>
        </div>
    </section>
)}