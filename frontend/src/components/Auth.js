import React from 'react';

function Auth(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmailChange = (evt) => {
        setEmail(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onSubmit(email, password);
    }
    return (
        <div className="auth">
            <form action="#" name={props.name} className="auth__form" noValidate onSubmit={handleSubmit}>
                <h3 className="auth__title">
                    {props.title}
                </h3>
                <div className="auth__input-container">
                    <input type="email" className="auth__input auth__input_kind_email" name="email" value={email}
                           placeholder="Email" required onChange={handleEmailChange}/>
                    <span className="auth__error email-input-error"></span>
                </div>
                <div className="auth__input-container">
                    <input type="password" className="auth__input auth__input_kind_password" name="password"
                           value={password} placeholder="Пароль" required minLength="8" onChange={handlePasswordChange}/>
                    <span className="popup__error about-input-error"></span>
                </div>
                <button className="auth__submit-btn" type="submit">
                    {props.buttonText}
                </button>
                {props.children}
            </form>
        </div>
    );
}

export default Auth;