import * as React from 'react';






export default function Signin() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div className="auth">
            <h2 className="auth__title">Вход в профиль</h2>
            <form className="auth__form" onSubmit={handleSubmit}>
                <input className="auth__form_input" placeholder="Email"  type="email" ></input>
                <input className="auth__form_input" placeholder="Пароль" type="password"  autoComplete="current-password" ></input>
                <button className="auth__form_submit-button" type="submit">Войти</button>
                <div className="auth__form_link-count">
                    <p className="auth__form_link-text" type="submit">Нет аккаунта? <a className="auth__form_link-button">Зарегистрироваться</a></p>
                    <a className="auth__form_link-button" type="submit">Забыли пароль?</a>
                </div>
            </form>
        </div>
    );
}