import React from 'react';
import trashCan from '../images/trash.svg';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const card = props.card;
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    const handleCardClick = () => {
        props.onCardClick(card);
    };

    const handleLikeClick = () => {
        props.onLikeClick(card);
    }

    const handleDeleteClick = () => {
        props.onDeleteClick(card);
    }
    return (
        <li className="place">
            <img src={card.link} alt={card.name} className="place__image" onClick={handleCardClick}/>
            {isOwn &&
                <img
                    src={trashCan}
                    onClick={handleDeleteClick}
                    alt="Кнопка удалить карточку"
                    className="place__delete"
                />
            }
            <div className="place__info">
                <h2 className="place__name">
                    {card.name}
                </h2>
                <div className="place__likes">
                    <button
                        type="button"
                        className={`place__like ${isLiked && 'place__like_active'}`}
                        onClick={handleLikeClick}
                    >
                    </button>
                    <p className="place__likes-counter">
                        {card.likes.length}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default Card;