import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from "./HomePage";
import Catalog from "./Catalog";
import CatalogSystemPoliv from "./CatalogSystemPoliv";
import ProductCard from "./ProductCard";
import BurgerMenu from "./BurgerMenu";
import Header from "./Header";
import Signin from "./Signin";
import Footer from "./Footer";
import Service from "./Service";
import Popup from "./Popup";
import Articles from "./Articles";


function Page() {
    const [burgerOpen, setBurgerOpen] = React.useState(false);
    const [popupOpen, setPopupOpen] = React.useState(false);
    function controlBurger() {
        setBurgerOpen(!burgerOpen);
    }
    function controlPopup() {
        setPopupOpen(!popupOpen);
    }
    const closeByOutsideClick = (evt) => {
        const eventTarget = evt.target;
        console.log("click")
        if(eventTarget.classList.contains('burger-menu_visible' )) {
            controlBurger()
        }
        if(eventTarget.classList.contains('popup_visible' )) {
            controlPopup()
        }
    }


    useEffect(() => {
        if (burgerOpen || popupOpen) {
            document.addEventListener('mousedown', closeByOutsideClick);
        } else {
            document.removeEventListener('mousedown', closeByOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', closeByOutsideClick);
        };
    }, [burgerOpen, popupOpen]);

    return (
        <div>
            <BurgerMenu burgerOpen={burgerOpen}/>
            <Popup popupOpen={popupOpen} closePopup={controlPopup} />
            <div className="App">
                <Routes>
                    <Route
                        path="/uslugi/*"
                        element={<Header noBackgroundImage={true} openBurger={controlBurger} openPopup={controlPopup}/>}
                    />
                    <Route
                        path="/*"
                        element={<Header noBackgroundImage={false} openBurger={controlBurger} openPopup={controlPopup}/>}
                    />
                </Routes>

                <Routes>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                    <Route
                        path="/catalog/*"
                        element={<Catalog />}
                    />
                    <Route
                        path="/uslugi/:serviceName"
                        element={<Service />}
                    />
                    <Route
                        path="/product-card/:productId"
                        element={<ProductCard />}/>

                    <Route
                        element={<CatalogSystemPoliv />}
                        path="/catalog/system-poliv" />

                    <Route
                        element={<Articles />}
                        path="/article" />
                </Routes>
                <Footer openPopup={controlPopup}/>
            </div>
        </div>
    );
}

export default Page;

