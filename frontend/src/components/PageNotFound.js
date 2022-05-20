import React from "react";
import { Link } from "react-router-dom";
import Eror from "../images/unnamed.jpg";

function PageNotFound() {
  return (
    <div className="first-page">
      <h3 className="first-page__text">
        <span>404</span> - Страница не найдена
      </h3>
      <img className="popup__image" src={Eror} alt="404" />
      <Link to="/profile" className="first-page__link">
        Возвращайся!
      </Link>
    </div>
  );
}

export default PageNotFound;
