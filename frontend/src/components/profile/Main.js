import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const onEditAvatar = () => {
    props.onEditAvatar();
  };

  const onEditProfile = () => {
    props.onEditProfile();
  };

  const onAddPlace = () => {
    props.onAddPlace();
  };

  return (
    <main className="content">
      <section className="person">
        <div className="person__avatar-plus-info">
          <div className="person__avatar-container" onClick={onEditAvatar}>
            <img
              src={currentUser.avatar}
              alt="Аватар"
              className="person__avatar"
            />
            <button
              type="button"
              aria-label="Обновить аватар"
              title="Обновить аватар"
              className="person__avatar-button"
            ></button>
          </div>
          <div className="person__info">
            <div className="person__button-plus-name">
              <h1 className="person__name">{currentUser.name}</h1>
              <button
                onClick={onEditProfile}
                type="button"
                aria-label="Редактировать профиль"
                title="Редактировать профиль"
                className="person__edit-button"
              ></button>
            </div>
            <p className="person__profession">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="person__add-button"
          onClick={onAddPlace}
          aria-label="Новое место"
          title="Новое место"
        ></button>
      </section>
      <section className="cards">
        {props.cards.map(card => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onHandleDeleteClick={props.onHandleDeleteClick}
            onLike={props.onLike}
          />
        ))}
      </section>;
    </main>
  );
}

export default Main;
