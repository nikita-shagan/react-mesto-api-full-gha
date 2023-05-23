import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import * as auth from '../utils/auth.js';
import Auth from './Auth';

const Register = ({ handleRegister }) => {
    const navigate = useNavigate();
    const handleSubmit = (email, password) => {
        if (!email || !password){
            return;
        }
        return auth.register(email, password)
            .then(() => {
                navigate('/sign-in', {replace: true});
                handleRegister(true);
            })
            .catch(err => {
                handleRegister(false)
                console.log(err)
            });
    }

    return (
        <Auth
            onSubmit={handleSubmit}
            title={'Регистрация'}
            buttonText={'Зарегестрироваться'}
        >
            <div className="auth__option">
                <p className="auth__option-text">Уже зарегистрированы?&nbsp;</p>
                <Link to="/sign-in" className="auth__option-link">Войти</Link>
            </div>
        </Auth>
    )
}

export default Register;