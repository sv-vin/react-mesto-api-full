import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  //поле имя
  const [name, setChangeName] = React.useState("");

  const handleChangeName = (event) => {
    setChangeName(event.target.value);
  };
  //поле деятельности
  const [description, setChangeDescription] = React.useState("");

  const handleChangeDescription = (event) => {
    setChangeDescription(event.target.value);
  };

  React.useEffect(() => {
    setChangeName(currentUser.name);
    setChangeDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      className="popup popup_type_edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <section className="popup__input-section">
        <input
          type="text"
          name="name"
          placeholder="Имя"
          className="popup__input popup__input_type_name"
          required
          minLength={2}
          maxLength={40}
          value={name || ""}
          onChange={handleChangeName}
        />
        <span className="popup__input-error"></span>
      </section>
      <section className="popup__input-section">
        <input
          type="text"
          name="about"
          placeholder="Профессия"
          className="popup__input popup__input_type_job"
          required
          minLength={2}
          maxLength={200}
          value={description || ""}
          onChange={handleChangeDescription}
        />
        <span className="popup__input-error"></span>
      </section>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
