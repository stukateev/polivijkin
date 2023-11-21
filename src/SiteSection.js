import React from "react";
import tabArticle from "./img/landscape/tab-article.jpg"
import tabAutopoliv from "./img/landscape/tab-autopoliv.jpg"
import tabBath from "./img/landscape/tab-bath.jpg"
import tabGidrobath from "./img/landscape/tab-gidrobath.jpg"
import tabLandscape from "./img/landscape/tab-landscape.jpg"
import tabLight from "./img/landscape/tab-light.png"
import tabMarket from "./img/landscape/tab-market.jpg"
import tabNews from "./img/landscape/tab-news.png"
import tabOsmos from "./img/landscape/tab-osmos.png"




export default function SiteSection (){
    return(
        <section className={"site-section"}>
            <h3 className={"site-section__title"}>Разделы сайта</h3>
            <div className={"site-section__grid-box"}>
                <div className={"site-section__column"}>
                    <div className={"site-section__section-button site-section__section-button_big"} >
                        <img src={tabAutopoliv} className={"site-section__section-button-image site-section__section-button-image_big"}/>
                        <h4 className={"site-section__section-button-title site-section__section-button-title_big"}>Система полива</h4>
                        <p className={"site-section__section-button-description site-section__section-button-description_big"}> </p>
                    </div>
                    <div className={"site-section__small-box"}>
                        <div className={"site-section__section-button site-section__section-button_small"} >
                            <img src={tabArticle} className={"site-section__section-button-image site-section__section-button-image_small"}/>
                            <h4 className={"site-section__section-button-title site-section__section-button-title_small"}>Статьи </h4>
                            <p className={"site-section__section-button-description site-section__section-button-description_small"}> </p>
                        </div>
                        <div className={"site-section__section-button site-section__section-button_small"} >
                            <img src={tabNews} className={"site-section__section-button-image site-section__section-button-image_small"}/>
                            <h4 className={"site-section__section-button-title site-section__section-button-title_small"}>Новости </h4>
                            <p className={"site-section__section-button-description site-section__section-button-description_small"}> </p>
                        </div>
                    </div>
                    <div className={"site-section__section-button site-section__section-button_big"} >
                        <img src={tabLandscape} className={"site-section__section-button-image site-section__section-button-image_big"}/>
                        <h4 className={"site-section__section-button-title site-section__section-button-title_big"}>Ландшафтный дизайн </h4>
                        <p className={"site-section__section-button-description site-section__section-button-description_big"}> </p>
                    </div>

                </div>
                <div className={"site-section__column"}>
                    <div className={"site-section__small-box"}>
                        <div className={"site-section__section-button site-section__section-button_small"} >
                            <img src={tabLight} className={"site-section__section-button-image site-section__section-button-image_small"}/>
                            <h4 className={"site-section__section-button-title site-section__section-button-title_small"}>Освещение </h4>
                            <p className={"site-section__section-button-description site-section__section-button-description_small"}></p>
                        </div>
                        <div className={"site-section__section-button site-section__section-button_small"} >
                            <img src={tabGidrobath} className={"site-section__section-button-image site-section__section-button-image_small"}/>
                            <h4 className={"site-section__section-button-title site-section__section-button-title_small"}>Бассейны и джакузи </h4>
                            <p className={"site-section__section-button-description site-section__section-button-description_small"}> </p>
                        </div>
                    </div>

                    <div className={"site-section__section-button site-section__section-button_big"} >
                        <img src={tabMarket} className={"site-section__section-button-image site-section__section-button-image_big"}/>
                        <h4 className={"site-section__section-button-title site-section__section-button-title_big"}>Каталог </h4>
                        <p className={"site-section__section-button-description site-section__section-button-description_big"}> </p>
                    </div>

                    <div className={"site-section__small-box"}>
                        <div className={"site-section__section-button site-section__section-button_small"} >
                            <img src={tabBath} className={"site-section__section-button-image site-section__section-button-image_small"}/>
                            <h4 className={"site-section__section-button-title site-section__section-button-title_small"}>Искусственные водоёмы  </h4>
                            <p className={"site-section__section-button-description site-section__section-button-description_small"}> </p>
                        </div>
                        <div className={"site-section__section-button site-section__section-button_small"} >
                            <img src={tabOsmos} className={"site-section__section-button-image site-section__section-button-image_small"}/>
                            <h4 className={"site-section__section-button-title site-section__section-button-title_small"}>Водоподготовка </h4>
                            <p className={"site-section__section-button-description site-section__section-button-description_small"}> </p>
                        </div>
                    </div>
                </div>
                <div className={"site-section__flex-box-column"}>

                </div>
            </div>
        </section>
    )
}