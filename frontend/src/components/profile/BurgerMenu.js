import React from "react";

function BurgerMenu(props) {
  return (
    <div
    className={
      props.loggedIn
        ? "header__burger_type-visible"
        : "header__burger_type-none"
    }
  >
    <div
      className={`header-popup ${
        props.isOpen ? "header-popup__opened" : "header-popup__animation-closed"
      }`}
    >
      <button
        type="button"
        className="header-popup__closed"
        onClick={props.onClose}
      ></button>
      <p className="header-popup__mail">{props.userData.email}</p>
      <button onClick={props.onLogout} className="header-popup__out">
        Выйти
      </button>
    </div>
    </div>
  );
}

export default BurgerMenu;
