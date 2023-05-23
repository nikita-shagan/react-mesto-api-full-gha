import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const linkInputRef = React.useRef();

    React.useEffect(() => {linkInputRef.current.value = ''}, [props.isOpen])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onUpdateAvatar(linkInputRef.current.value);
    }

    return (
        <PopupWithForm
            name={'avatar'}
            title={'Обновить аватар'}
            isOpen={props.isOpen}
            onButtonClose={props.onButtonClose}
            onOverlayClose={props.onOverlayClose}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}
        >
            <div className="popup__input-container">
                <input type="url" className="popup__input popup__input_kind_link" name="link" defaultValue=""
                       placeholder="Ссылка на картинку" required ref={linkInputRef}/>
                <span className="popup__error link-input-error"></span>
            </div>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;
