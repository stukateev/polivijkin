import React from "react";

export default  function FeedbackForm (){
    return(
        <section className={"feedback-form"}>

            <form className={"feedback-form__form"}>
                <div className={"feedback-form__form-main"}>
                    <div className={"feedback-form__input-count"}>
                        <label className={"feedback-form__label feedback-form__label_name"}>
                            Имя
                        </label>
                        <input placeholder={"Введите ваше имя"} className={"feedback-form__input feedback-form__input_name"}/>
                    </div>
                        <div className={"feedback-form__input-count"}>
                        <label className={"feedback-form__label feedback-form__label_email"}>
                            E-mail
                        </label>
                        <input placeholder={"Введите ваш e-mail"} className={"feedback-form__input feedback-form__input_email"}/>
                    </div>
                    <div className={"feedback-form__input-count"}>
                        <label className={"feedback-form__label feedback-form__label_number"}>
                            Телефон
                        </label>
                        <input placeholder={"Введите ваш номер телефона"} className={"feedback-form__input feedback-form__input_number"}/>
                    </div>
                </div>
                <div className={"feedback-form__form-add"}>
                    <label className={"feedback-form__label feedback-form__label_text"}>
                        Сообщение
                    </label>
                    <input placeholder={"Введите любую дополнительную информацию, на ваше усмотрение"} className={"feedback-form__input feedback-form__input_text"}/>
                </div>
                <button className={"feedback-form__button"}>
                    Отправить
                </button>
            </form>
        </section>
    )
}
