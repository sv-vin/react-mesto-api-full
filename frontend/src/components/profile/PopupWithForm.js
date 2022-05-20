import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup__opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
        <div className="popup__content">
          <form
            className="popup__form"
            name={props.name}
            onSubmit={props.onSubmit}
          >
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button type="submit" className="popup__submit-button">
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
