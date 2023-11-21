import React, {useState} from 'react';
import slide from "./img/landscape/shutterstock_360058166.jpg"
import {useNavigate} from "react-router-dom";
const PUBLIC_URL = "http://localhost:3000"
const categoryList = [
    {
        "category_name":"Системы полива",
        "subcategory_list":[
            {"subcategory_name":"Клапаны", "subcategory_img":"/catalog/Hunter-PGV-151.png", "subcategory_img_alt":"Клапаны"  },
            {"subcategory_name":"Дождеватели", "subcategory_img":"/catalog/hunter-i-25--irrigatore-dinamico-con-attacco-1-femmina-raggio-da-119-a-216-metri.jpg", "subcategory_img_alt":"Дождеватели"},
            {"subcategory_name":"Контроллеры", "subcategory_img":"/catalog/sterownik_wewn_trzny_esp_rzx_4i_rain_bird3-600x600.png", "subcategory_img_alt":"Контроллеры"},
            {"subcategory_name":"Датчики", "subcategory_img":"/catalog/1626873843015-c26c13a0-3b2b-4f38-9ee6-0ad2d8ef144e-image.png", "subcategory_img_alt":"Датчики"},
            {"subcategory_name":"Труба", "subcategory_img":"/catalog/1626873843015-c26c13a0-3b2b-4f38-9ee6-0ad2d8ef144e-image.png", "subcategory_img_alt":"Труба"},
            {"subcategory_name":"Фитинги", "subcategory_img":"/catalog/1626873843015-c26c13a0-3b2b-4f38-9ee6-0ad2d8ef144e-image.png", "subcategory_img_alt":"Фитинги"}
            ]
    },
    {
        "category_name":"Освещение",
        "subcategory_list":[
            {"subcategory_name":"Уличные светильники"},
            {"subcategory_name":"Лампочки"},
            {"subcategory_name":"Светодиодные ленты"},
            {"subcategory_name":"Датчики"}
        ]
    }
]

export default function CatalogMenu(){
    const navigate = useNavigate()
    const [activeCatalogMenuScreen, setActiveCatalogMenuScreen] = useState(0)
    const [screenClassName, setScreenClassName] = useState("catalog-menu__fold-screen")

    function CatalogMenuScreen(){
        if (activeCatalogMenuScreen === 0){
            return
        }
        return(
            <div
                 onMouseEnter={() => setScreenClassName("catalog-menu__fold-screen")}
                 onMouseLeave={() => setScreenClassName("catalog-menu__fold-screen_disabled")}
                 className={screenClassName}>
                {activeCatalogMenuScreen.map((obj) => {
                    console.log(PUBLIC_URL+obj.subcategory_img)
                    return (

                        <div className="catalog-menu__category">
                            <h4 className="catalog-menu__category-title">{obj.subcategory_name}</h4>
                            <img className="catalog-menu__category-image" src={PUBLIC_URL + obj.subcategory_img} />
                        </div>

                    )
                })}
            </div>
        )

    }
    function categoryCheck(name){
        categoryList.map((obj) => {
            if (obj.category_name === name) {
                setScreenClassName("catalog-menu__fold-screen")
                return setActiveCatalogMenuScreen (obj.subcategory_list)
            }
        })
    }

    return(
        <div className="catalog-menu">

            <ul className="catalog-menu__list"
                >
                <li className="catalog-menu__fold"
                    onClick={() =>navigate("/catalog/system-poliv")}
                    onMouseEnter={() => categoryCheck("Системы полива")}
                    onMouseLeave={() => setScreenClassName("catalog-menu__fold-screen_disabled")}>
                    Системы полива
                    <div className="catalog-menu__animation"></div>
                </li>
                <li className="catalog-menu__fold"
                    onMouseEnter={() => categoryCheck("Освещение")}
                    onMouseLeave={() => setScreenClassName("catalog-menu__fold-screen_disabled")}>
                    Освещение
                    <div className="catalog-menu__animation"></div>
                </li>
                <li className="catalog-menu__fold">Озеленение
                    <div className="catalog-menu__animation"></div>
                </li>
                <li className="catalog-menu__fold">Плитка
                    <div className="catalog-menu__animation"></div>
                </li>
                <li className="catalog-menu__fold">Бассейны
                    <div className="catalog-menu__animation"></div>
                </li>

            </ul>

                <img className="catalog-menu__image" src={slide}/>

            <CatalogMenuScreen />
        </div>



    )
}
