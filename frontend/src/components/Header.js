import React from "react";
import logo from "../images/Vector.svg";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  let location = useLocation();

  let loginLinkVisible = false;
  let registrLinkVisible = false;

  if (location.pathname === "/sign-in") {
    loginLinkVisible = true;
  } else {
    registrLinkVisible = true;
  }

  const onHeaderPopup = () => {
    props.onHeaderPopup();
  };

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Место-Россия" />
      <div
        className={
          props.loggedIn
            ? "header__burger_type-visible"
            : "header__burger_type-none"
        }
      >
        <button
          type="button"
          className={`header__bar-open ${
            props.isOpen ? "header__bar-open_type_none" : ""
          }`}
          onClick={onHeaderPopup}
        ></button>
      </div>
      <div className={props.loggedIn ? "header__bar" : "header__bar_type-none"}>
        <p className="header__mail">{props.userData.email}</p>
        <button onClick={props.onLogout} className="header__out">
          Выйти
        </button>
      </div>
      <Link
        to="/sign-up"
        className={
          props.loggedIn || registrLinkVisible
            ? "header__register_type-none"
            : "header__register"
        }
      >
        Регистрация
      </Link>
      <Link
        to="/sign-in"
        className={
          props.loggedIn || loginLinkVisible
            ? "header__register_type-none"
            : "header__register"
        }
      >
        Войти
      </Link>
    </header>
  );
}

export default Header;
