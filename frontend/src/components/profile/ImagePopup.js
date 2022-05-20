import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup-place ${props.card.link && 'popup__opened'}`}>
      <div className="popup-place__container">
        <button onClick={props.onClose} type="button" className="popup__close popup-place__close"></button>
        <img className="popup-place__img" src={props.card.link} alt={props.card.name} />
        <h2 className="popup-place__title">{props.card.name}</h2>
      </div>
    </div>
  )
}


export default ImagePopup;
