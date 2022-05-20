import React from "react";
import yesImg from "../../images/PopupYesImg.jpg";
import noImg from "../../images/PopupNoImg.jpg";

function InfoTooltip(props) {
  return (
      <div className={`popup ${props.isToOpen || props.isDontOpen ? "popup__opened" : ""}`}>
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            onClick={props.onClose}
          ></button>
          <img className="popup__image" src={props.isToOpen ? yesImg : noImg} alt="Успешно или не очень" />
          <h2 className="popup__text">{props.isToOpen ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
        </div>
      </div>
  );
}

export default InfoTooltip;
