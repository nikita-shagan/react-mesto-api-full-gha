import React from 'react';

function PopupWithForm(props) {
    return (
        <div
            className={`popup popup_sort_${props.name} ${props.isOpen && 'popup_opened'}`}
            onMouseDown={props.onOverlayClose}
        >
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={props.onButtonClose}/>
                <form action="#" name={props.name} className="popup__form" onSubmit={props.onSubmit}>
                    <h3 className="popup__title">
                        {props.title}
                    </h3>
                    {props.children}
                    <button className="popup__submit-btn" type="submit">
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;