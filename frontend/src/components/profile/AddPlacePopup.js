import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  //Поле названия
  const [name, setName] = React.useState("");

  function handleCardName(event) {
    setName(event.target.value);
  }

  //Поле ссылки
  const [link, setLink] = React.useState("");

  function handleCardLink(event) {
    setLink(event.target.value);
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="add"
      className="popup popup_type_add"
      title="Новое место"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <section className="popup__input-section">
        <input
          value={name}
          onChange={handleCardName}
          type="text"
          name="name"
          className="popup__input popup__input_type_name"
          placeholder="Название"
          required
          minLength={2}
          maxLength={30}
        />
        <span className="popup__input-error"></span>
      </section>
      <section className="popup__input-section">
        <input
          value={link}
          onChange={handleCardLink}
          type="url"
          name="link"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error"></span>
      </section>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
