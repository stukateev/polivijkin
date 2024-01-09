import sales_image from "./img/landscape/shutterstock_1162697149_edited.jpg";
import React from "react";


export default function SubServiceSection(props){
    const PUBLIC_URL = "http://localhost:3000"

    return(
        <section className="sub-service-section">

            { props.servicesListPage.subServicePopup.map((item, index) => {
                return(
                    <div key={index} className="sub-service-section__button">

                        <img className="sub-service-section__img" src={ PUBLIC_URL + item.img.link}   />
                        <h4 className="sub-service-section__button-title">{item.name}</h4>
                        <div  className="sub-service-section__button-title-border"></div>
                        <div className="sub-service-section__price-cont">
                            <p className="sub-service-section__price">{item.price} ₽</p>
                            <p className="sub-service-section__unit">{item.unit}</p>
                        </div>

                    </div>
                )
            })
            }
        </section>
    )}