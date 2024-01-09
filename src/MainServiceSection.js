
import {useParams} from "react-router-dom";
import SaleSection from "./SaleSection";
import {useEffect, useState} from "react";


const PUBLIC_URL = "http://localhost:3000"
export default function MainServiceSection(props){

    const autoPlayDelay = 5000
    const [imageLink, setImageLink] = useState(PUBLIC_URL+ props.servicesListPage.img.link)
    const [description, setDescription] = useState("")
    const [activePictureIndex, setActivePictureIndex] = useState(0)

    function activatingButton(pictureIndex) {
        const backElement = document.getElementById(`sub-service_${activePictureIndex}`)
        const element = document.getElementById(`sub-service_${pictureIndex}`);
        backElement.className = "main-service-section__sub-service-count"
        element.className = "main-service-section__sub-service-count main-service-section__sub-service-count_activate"
    }

    function settingImageLink (pictureIndex){
        activatingButton(pictureIndex)
        setImageLink(PUBLIC_URL+ props.servicesListPage.subServices[pictureIndex].imgLink)
        setDescription( props.servicesListPage.subServices[pictureIndex].description)
        setActivePictureIndex(pictureIndex)
    }

    useEffect(() => {
        settingImageLink (0)
        activatingButton(0)
        setActivePictureIndex(0)
    }, [props.serviceName]);


    useEffect(() => {
        const interval = setInterval(() => {
            if(activePictureIndex ===  props.servicesListPage.subServices.length-1){
                settingImageLink(0);
            }
            else {
                settingImageLink(activePictureIndex+1);
            }
        }, autoPlayDelay);

        return () => {
            clearInterval(interval);
        }
    },[imageLink])



    return(
        <section className="main-service-section">
            <div className="main-service-section__work-count">
                {
                    props.servicesListPage.subServices.map((item, index) => {
                        return(
                            <div key={index} id={"sub-service_"+index} className="main-service-section__sub-service-count" onMouseEnter={() => settingImageLink (index)} >
                                <p className="main-service-section__subtitle-index">{1+index}</p>
                                <p className="main-service-section__subtitle">{item.name}</p>
                            </div>
                        )}
                    )}
            </div>
            <p className="main-service-section__description">{description}</p>
            <img className="main-service-section__image" src={imageLink} alt={PUBLIC_URL+ props.servicesListPage.img.alt}/>
        </section>
    )
}