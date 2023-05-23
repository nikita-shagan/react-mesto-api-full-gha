import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import * as auth from '../utils/auth.js';
import Auth from './Auth';

const Login = ({ handleLogin }) => {
    const navigate = useNavigate();

    const handleSubmit = (email, password) => {
        if (!email || !password){
            return;
        }
        auth.authorize(email, password)
            .then((data) => {
                if (data && data.token) {
                    handleLogin(email);
                    navigate('/main', {replace: true});
                } else {
                    alert("Неверный логин или пароль")
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <Auth
            onSubmit={handleSubmit}
            title={'Вход'}
            buttonText={'Войти'}
        >
            <div className="auth__option">
                <p className="auth__option-text">Ещё не зарегистрированы?&nbsp;</p>
                <Link to="/sign-up" className="auth__option-link">Зарегистрироваться</Link>
            </div>
        </Auth>
    )
}

export default Login;