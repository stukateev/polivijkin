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
import {useNavigate} from "react-router-dom";


export default function SiteSection (){
    const navigate = useNavigate()

    return(
        <section className={"site-section"}>

            <div className={"site-section__grid-box"}>
                <div className={"site-section__column"}>
                    <div className={"site-section__section-button site-section__section-button_bigger"} onClick={() => navigate('/uslugi/irrigation')} >
                        <img src={tabAutopoliv} className={"site-section__section-button-image site-section__section-button-image_bigger"}/>
                        <h4 className={"site-section__section-button-title site-section__section-button-title_big"}>Система полива</h4>
                        <p className={"site-section__section-button-description site-section__section-button-description_big"}>Система полива – это комплексное устройство, предназначенное для автоматизации и обеспечения эффективного полива растений. Она включает в себя насос, трубопроводы, форсунки или капельницы, а также систему контроля и управления. </p>
                    </div>

                    <div className={"site-section__section-button site-section__section-button_bigger"} onClick={() => navigate('/uslugi/landscape-design')}>
                        <img src={tabLandscape} className={"site-section__section-button-image site-section__section-button-image_bigger"}/>
                        <h4 className={"site-section__section-button-title site-section__section-button-title_big"}>Ландшафтный дизайн </h4>
                        <p className={"site-section__section-button-description site-section__section-button-description_big"}>Мы превратим ваш приусадебный участок в уютное место, сочетая функциональность и красоту. Опытные дизайнеры подберут растения, элементы декора и освещения, чтобы воплотить ваши мечты. Разработка проекта, профессиональная установка и забота о каждой детали. Сделайте свой участок уникальным – обратитесь к нам! </p>
                    </div>
                </div>

                <div className={"site-section__column"}>
                    <div className={"site-section__small-box"}>
                        <div className={"site-section__section-button site-section__section-button_small"} onClick={() => navigate('/uslugi/landscape-light')}>
                            <img src={tabLight} className={"site-section__section-button-image site-section__section-button-image_small"}/>
                            <h4 className={"site-section__section-button-title site-section__section-button-title_small"}>Освещение </h4>
                            <p className={"site-section__section-button-description site-section__section-button-description_small"}>Обеспечьте ваш участок комфортным вечерним пребыванием с нашим уличным освещением.  </p>
                        </div>
                        <div className={"site-section__section-button site-section__section-button_small"} onClick={() => navigate('/uslugi/bath')}>
                            <img src={tabGidrobath} className={"site-section__section-button-image site-section__section-button-image_small"}/>
                            <h4 className={"site-section__section-button-title site-section__section-button-title_small"}>Бассейны и джакузи </h4>
                            <p className={"site-section__section-button-description site-section__section-button-description_small"}>Добавьте уюта и роскоши, наслаждайтесь прохладой в бассейне или расслабляйтесь в джакузи под открытым небом.  </p>
                        </div>
                    </div>

                    <div className={"site-section__section-button site-section__section-button_big"} onClick={() => navigate('/catalog')}>
                        <img src={tabMarket} className={"site-section__section-button-image site-section__section-button-image_big"}/>
                        <h4 className={"site-section__section-button-title site-section__section-button-title_big"}>Каталог </h4>
                        <p className={"site-section__section-button-description site-section__section-button-description_big"}> Здесь вы найдете широкий выбор товаров и услуг для создания уютного и функционального пространства вокруг своего дома. От декоративных элементов и садовой мебели до комплектующих систем автоматического полива.  </p>
                    </div>
                    <div className={"site-section__small-box"} >
                        <div className={"site-section__section-button site-section__section-button_small"} onClick={() => navigate('/article')}>
                            <img src={tabArticle} className={"site-section__section-button-image site-section__section-button-image_small"}/>
                            <h4 className={"site-section__section-button-title site-section__section-button-title_small"}>Статьи </h4>
                            <p className={"site-section__section-button-description site-section__section-button-description_small"}>Превратите свой участок в уютный оазис с нашими советами по благоустройству приусадебных территорий! </p>
                        </div>
                        <div className={"site-section__section-button site-section__section-button_small"} onClick={() => navigate('/uslugi/bath')}>
                            <img src={tabBath} className={"site-section__section-button-image site-section__section-button-image_small"}/>
                            <h4 className={"site-section__section-button-title site-section__section-button-title_small"}>Искусственные водоёмы  </h4>
                            <p className={"site-section__section-button-description site-section__section-button-description_small"}>Откройте мир искусственных водоемов с нашими профессиональными решениями по благоустройству приусадебных участков.  </p>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}