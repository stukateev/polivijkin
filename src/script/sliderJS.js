
const quantitySliderDots = initialSlides.length

console.log(document.querySelector('#slide-template'))
const slideTemplate = document.querySelector('#slide-template').content;

const slideElement = slideTemplate.querySelector('.slide');

let slider = document.querySelector(".slider");
let sliderLine = slider.querySelector(".slider__line");
let viewport = slider.offsetWidth;
let btnNext = slider.querySelector(".slider__arrow_right");
let btnPrev = slider.querySelector(".slider__arrow_left");

// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда и задаём время проигрывания слайдов в ms
let viewSlide = 0;
let timeSlider = 3000;

function createMarkup(title, subtitle, description, button, image, i) {

    const slideElementClone = slideElement.cloneNode(true);
    const slideDescription = slideElementClone.querySelector(".slide__description")
    const slideDescriptionLi = slideElementClone.querySelector(".slide__description_li")

    slideElementClone.classList.add(`slide_number_${i}`)
    if (subtitle === ""){
        slideElementClone.querySelector(".slide__subtitle").remove();
    }
    else {slideElementClone.querySelector(".slide__subtitle").textContent = subtitle;}
    slideElementClone.querySelector(".slide__title").textContent = title;
    if (typeof description === "object") {
        description.forEach(function (obj) {
            let slideDescriptionLiClone = slideDescriptionLi.cloneNode(true);
            slideDescriptionLiClone.textContent = obj
            slideDescription.appendChild(slideDescriptionLiClone);
        })
        slideDescriptionLi.remove()
    }
    else {slideDescriptionLi.textContent = description }
    slideElementClone.querySelector(".slide__button").textContent = button.text
    slideElementClone.querySelector(".slide__image").src = image.link;

    return slideElementClone
}

window.addEventListener('load', function () {
    let i=0
    initialSlides.forEach(function (obj) {
        sliderLine.appendChild(createMarkup(obj.title, obj.subtitle, obj.description, obj.button, obj.image, i));
        i++
    })

    addSliderDots(initialSlides)
    sliderDots.querySelector(`.slider__dot_number_${viewSlide}`).classList.add("slider__dot_active")


})

const sliderDots = document.querySelector(".slider__dots")
function addSliderDots(list){
    let i=0
    list.forEach(function (){
        let div = document.createElement("button");
        div.setAttribute("class", "slider__dot");
        div.classList.add( `slider__dot_number_${i}`);
        sliderDots.appendChild(div);
        i++
    })

}


btnNext.addEventListener("click", function () {
    onNextSlide ()
    btnNext.classList.add('slider__arrow_animated');

    btnNext.addEventListener("animationend", AnimationHandler, false);
    function AnimationHandler() {
        btnNext.classList.remove('slider__arrow_animated');
    }
});
btnPrev.addEventListener("click", function () {
    btnPrev.classList.add('slider__arrow_animated');
    sliderDots.querySelector(`.slider__dot_number_${viewSlide}`).classList.remove("slider__dot_active")
    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = quantitySliderDots-1;
    }
    sliderDots.querySelector(`.slider__dot_number_${viewSlide}`).classList.add("slider__dot_active")
    btnPrev.addEventListener("animationend", AnimationHandler, false);
    function AnimationHandler() {
        btnPrev.classList.remove('slider__arrow_animated');
    }
    sliderLine.style.left = -viewSlide * viewport + "px";

});

function onNextSlide (){
    sliderDots.querySelector(`.slider__dot_number_${viewSlide}`).classList.remove("slider__dot_active")

    if (viewSlide < quantitySliderDots-1) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    sliderDots.querySelector(`.slider__dot_number_${viewSlide}`).classList.add("slider__dot_active")
    sliderLine.style.left = -viewSlide * viewport + "px";

}
let timer = ""
function autoScrollSlider(){
    clearInterval(timer);
    timer = setInterval(onNextSlide, timeSlider)
}
function autoScrollSliderStop(){
    clearInterval(timer);
}
slider.addEventListener("mouseover", autoScrollSliderStop)
slider.addEventListener("mouseout", autoScrollSlider)


sliderDots.addEventListener('click', function(evt) {
    sliderDots.querySelector(`.slider__dot_active`).classList.remove("slider__dot_active")
    viewSlide = evt.target.classList[1].slice(-1);
    sliderLine.style.left = -viewSlide * viewport + "px";
    sliderDots.querySelector(`.slider__dot_number_${viewSlide}`).classList.add("slider__dot_active")
});
window.addEventListener('resize', function() {
    viewport = slider.offsetWidth;
    sliderLine.style.left = -viewSlide * viewport + "px";
}, true);

