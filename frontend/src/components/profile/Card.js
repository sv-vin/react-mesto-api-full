import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(id => { console.log(id);  console.log(currentUser._id);
    return id === currentUser._id
  });
  console.log('====================================');
  console.log(isLiked);
  console.log('====================================');
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__stroke ${ isLiked ? "card__stroke_active" : ""
  }`;

  function handleLikeClick() {
    props.onLike(props.card);
  }


  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleDeleteClick() {
    props.onHandleDeleteClick(props.card);
  }

  return (
    <article className="card">
      <img
        className="card__img"
        onClick={handleClick}
        src={props.card.link}
        alt={props.card.name}
      />
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
        aria-label="Удалить"
      ></button>
      <div className="card__description">
        <h2 className="card__text">{props.card.name}</h2>
        <div className="card__stroke-containet">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            aria-label="Нравится"
          ></button>
          <p className="card__stroke-number">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}      
export default Card;
