import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePopup(props) {
    return (
        <PopupWithForm
            onClose={props.onClose}
            isOpen={props.isOpen}
            name="delete"
            title="Вы уверены?"
            buttonText="Да"
            onSubmit={props.onSubmit} />
    )
}

export default DeletePopup;