import React, {useEffect} from "react";
import readMore from "./img/read-more.svg"

export default function SaleSlide(props){
    const PUBLIC_URL = "http://localhost:3000"

    return (

        props.obj.map((OBJ) => (
                <div className="sale-slide">
                    <div  className="sale-slide__image-count">
                        <img className="sale-slide__image" src={PUBLIC_URL + OBJ.image.link} alt={OBJ.image.alt}/>
                        <img className="sale-slide__button" src={readMore}/>
                        <p className="sale-slide__description">
                            dsfsfdsf
                        dsfsdf
                        fsdfddsdsdsssssssss dddddddddddddddd
                            fsdfddsdsdsssssssss dddddddddddddddd
                            fsdfddsdsdsssssssss dddddddddddddddd
                        sdfsdfsf</p>
                    </div>

                    <div className="sale-slide__text">
                        <p className="sale-slide__title">{OBJ.title}</p>

                    </div>

                </div>
            ))


    )
}