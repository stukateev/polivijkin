import React, {useEffect, useState} from "react";

import SaleSlide from "./SaleSlide";
const PUBLIC_URL = "http://localhost:3000"
export default function ArticleSlider(){

    const initialSlides = [
        {
            title:"Благоустройство",
            image:{
                link:"/landscape/slide1.jpg",
                altText:"Прекрасное сочетание газона и мраморной обсыпки белого цвета. А невысокий забор в минималистичном стиле наполняет пространство свободой",
            },
            link:PUBLIC_URL+"/landscape/slide1.jpg"
        },
        {
            title:"Как проектировать полив",
            image:{
                link:"/landscape/slide1.jpg",
                altText:"Прекрасное сочетание газона и мраморной обсыпки белого цвета. А невысокий забор в минималистичном стиле наполняет пространство свободой",
            },
            link:PUBLIC_URL+"/landscape/slide1.jpg"
        },
        {
            title:"Как выбрать оборудование для полива",
            image:{
                link:"/landscape/slide1.jpg",
                altText:"Прекрасное сочетание газона и мраморной обсыпки белого цвета. А невысокий забор в минималистичном стиле наполняет пространство свободой",
            },
            link:PUBLIC_URL+"/landscape/slide1.jpg"
        },
        {
            title:"Кантри стиль в ландшафтном дизайне",
            image:{
                link:"/landscape/slide1.jpg",
                altText:"Прекрасное сочетание газона и мраморной обсыпки белого цвета. А невысокий забор в минималистичном стиле наполняет пространство свободой",
            },
            link:PUBLIC_URL+"/landscape/slide1.jpg"
        },
    ]
    const [activeSlide, setActiveSlide] = useState([])

    const [activeArticleLength, setActiveArticleLength] = useState(3)


    let active_slide_length = 3




    function renderSlideList ()  {
        const activeSlidesList = []
        initialSlides.map((obj, index) => {
            if (index< activeArticleLength){
                activeSlidesList.push(initialSlides[index])
            }

        })
        setActiveSlide(activeSlidesList)
    }

    useEffect(() => {
        if (activeSlide.length===0){
            renderSlideList()
        }

    })


    return (

        <div className="article-slider">

            <div className="article-slider__count">
                <SaleSlide
                    obj={activeSlide}
                />
            </div>


        </div>

    )
}