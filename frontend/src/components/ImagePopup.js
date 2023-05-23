function ImagePopup(props) {
    const card = props.card;
    return (
        <div className={`popup popup_sort_picture ${props.isOpen && 'popup_opened'}`} onMouseDown={props.onOverlayClose}>
            <div className="popup__container popup__container_size_full">
                <button className="popup__close" type="button" onClick={props.onButtonClose}/>
                <figure className="zoomed-picture">
                    <img className="zoomed-picture__image" src={card.link} alt={card.name}/>
                    <figcaption className="zoomed-picture__caption">
                        {card.name}
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;