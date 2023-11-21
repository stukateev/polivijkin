import React, {useEffect} from "react";


export default function Slide(props){
    const PUBLIC_URL = "http://localhost:3000"

    return (
            <div className="slide">
                <div className="slide__text">
                    <h3 className="slide__title">{props.obj.title}</h3>
                    <span className="slide__subtitle">{props.obj.subtitle}</span>
                    <ul className="slide__description">
                        {props.obj.description.map((lis) => (
                            <li className="slide__description_li">{lis}</li>
                        ))}

                    </ul>
                    <button className="slide__button"> Подробнее</button>
                </div>
                <img className="slide__image" src={PUBLIC_URL + props.obj.image.link} alt={props.obj.image.alt}/>
            </div>

    )
}