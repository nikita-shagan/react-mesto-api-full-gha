import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        if (currentUser.name !== undefined && currentUser.about !== undefined) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser, props.isOpen]);

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }

    const handleDescriptionChange = (evt) => {
        setDescription(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name={'profile'}
            title={'Редактировать профиль'}
            isOpen={props.isOpen}
            onButtonClose={props.onButtonClose}
            onOverlayClose={props.onOverlayClose}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}
        >
            <div className="popup__input-container">
                <input type="text" className="popup__input popup__input_kind_name" name="name" value={name}
                       placeholder="Имя" required minLength="2" maxLength="40" onChange={handleNameChange}/>
                <span className="popup__error name-input-error"></span>
            </div>
            <div className="popup__input-container">
                <input type="text" className="popup__input popup__input_kind_about" name="about" value={description}
                       placeholder="Работа" required minLength="2" maxLength="200" onChange={handleDescriptionChange}/>
                <span className="popup__error about-input-error"></span>
            </div>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
