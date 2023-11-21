import React, {useEffect, useState} from "react";

import SaleSlide from "./Slide";

export default function SalesSlider(){

    const initialSlides = [
        {
            title:"Благоустройство",
            subtitle:"под ключ",
            description:['Разработка дизайн-проекта',
                'Подготовительные работы (вывоз строительного мусора и планирование участка)',
                'Устройство дренажных систем',
                'Установка септиков',
                'Системы автополива и уличного освещения',
                'Установка объектов МАФ',
                'Строительство бассейнов и искусственных водоёмов',
                'Озеленение участка'
            ],
            button:{
                text:"Подробнее",
                link:"",
            },
            image:{
                link:"/landscape/slide1.jpg",
                altText:"Прекрасное сочетание газона и мраморной обсыпки белого цвета. А невысокий забор в минималистичном стиле наполняет пространство свободой",
            },
        },
        {
            title:"Система автополива",
            subtitle:"",
            description:['Разработка дизайн-проекта'],
            button:{
                text:"Заказать расчёт",
                link:"",
            },
            image:{
                link:"/landscape/shutterstock_679663252 (1).jpg",
                altText:"Система автоматического полива из первых рук",
            },
        },
        {
            title:"Ландшафтный дизайн",
            subtitle:"",
            description:['Разработка дизайн-проекта',
                'Подготовительные работы (вывоз строительного мусора и планирование участка)',
                'Устройство дренажных систем',
            ],
            button:{
                text:"Подробнее",
                link:"",
            },
            image:{
                link:"/landscape/shutterstock_468266921.jpg",
                altText:"Прекрасное сочетание газона и мраморной обсыпки белого цвета. А невысокий забор в минималистичном стиле наполняет пространство свободой",
            },
        },
    ]
    const [activeSlide, setActiveSlide] = useState(0)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)



    const lengthSlides = initialSlides.length - 1


    function nextSlide() {
        if (activeSlideIndex < lengthSlides) {
            setActiveSlideIndex(activeSlideIndex+1)
        }else if (activeSlideIndex === lengthSlides){
            setActiveSlideIndex(0)
        }
    }
    function previousSlide() {
        if (activeSlideIndex > 0) {
            setActiveSlideIndex(activeSlideIndex-1)
        }else if (activeSlideIndex === 0){
            setActiveSlideIndex(lengthSlides)
        }
    }



    return (

        <div className="sales-slider">
            <button className="slider__arrow slider__arrow_left" onClick={previousSlide}></button>
            <SaleSlide
                obj={initialSlides[activeSlideIndex]}
                key={1}
                setActiveSlide={setActiveSlide}
            />
            <button className="slider__arrow slider__arrow_right" onClick={nextSlide}></button>

        </div>

    )
}