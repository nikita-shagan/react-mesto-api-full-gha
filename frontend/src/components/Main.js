import React from 'react'
import Card from './Card.js';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {CardsContext} from "../contexts/CardsContext";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const cards = React.useContext(CardsContext);

    return (
        <main className="content">
            <section className="profile">
                <div onClick={props.onEditAvatar} className="profile__avatar-container">
                    <img src={currentUser.avatar} alt="Изображения профиля" className="profile__avatar"/>
                </div>
                <div className="profile__info">
                    <div className="profile__heading">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button onClick={props.onEditProfile} className="profile__edit-btn" type="button"></button>
                    </div>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button onClick={props.onAddPlace} className="profile__add-btn" type="button"></button>
            </section>
            <section className="places">
                <ul className="places__list">
                    {cards.map((card) => (
                        <Card
                            onCardClick={props.onCardClick}
                            onLikeClick={props.onLikeClick}
                            onDeleteClick={props.onDeleteClick}
                            key={card._id}
                            card={card}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main
