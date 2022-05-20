import React from "react";
import Footer from "./Footer";
import Main from "./Main";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Main
        onEditProfile={props.onEditProfile}
        onAddPlace={props.onAddPlace}
        onEditAvatar={props.onEditAvatar}
        onCardClick={props.onCardClick}
        onHandleDeleteClick={props.onHandleDeleteClick}
        cards={props.cards}
        onLike={props.onLike}
      />
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default Profile;
