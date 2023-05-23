import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    React.useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen]);

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }

    const handleLinkChange = (evt) => {
        setLink(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onAddPlace({name, link});
    }

    return (
        <PopupWithForm
            name={'place'}
            title={'Новое место'}
            isOpen={props.isOpen}
            onButtonClose={props.onButtonClose}
            onOverlayClose={props.onOverlayClose}
            buttonText={'Создать'}
            onSubmit={handleSubmit}
        >
            <div className="popup__input-container">
                <input type="text" className="popup__input popup__input_kind_name" name="name" value={name}
                       placeholder="Название" required minLength="2" maxLength="30" onChange={handleNameChange}/>
                <span className="popup__error name-input-error"></span>
            </div>
            <div className="popup__input-container">
                <input type="url" className="popup__input popup__input_kind_link" name="link" value={link}
                       placeholder="Ссылка на картинку" required onChange={handleLinkChange}/>
                <span className="popup__error link-input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup