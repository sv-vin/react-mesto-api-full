export const popupElement = document.querySelector('.popup');
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupAddPlace = document.querySelector('.popup_type_add-place');
export const popupOpenButtonElement = document.querySelector('.person__edit-button');
export const placeAddButtonElement = document.querySelector('.person__add-button');
export const popupCloseButtonElement = popupElement.querySelector('.popup__close');
export const popupCloseAddElement = popupAddPlace.querySelector('.popup__close');
export const formAddElement = popupAddPlace.querySelector('.popup__form');
export const placeCard = formAddElement.querySelector('.popup__input_type_name');
export const urlCard = formAddElement.querySelector('.popup__input_type_link');
export const popupElementNameInput = popupElement.querySelector('.popup__input_type_name');
export const popupElementJobInput = popupElement.querySelector('.popup__input_type_job');
export const formElement = document.querySelector('.popup__form');
export const formSubmitButton = document.querySelector('.popup__submit-button');
export const popupSaveAddElement = popupAddPlace.querySelector('.popup__submit-button');
export const popupPlace = document.querySelector('.popup-place');
export const popupPlaceContainer = popupPlace.querySelector('.popup-place__container');
export const popupPlaceClose = popupPlaceContainer.querySelector('.popup-place__close');
export const cardCase = document.querySelector('.cards');
export const formEdit = document.querySelector('.popup__form_type_profile');
export const formAdd = document.querySelector('.popup__form_type_place');
export const formAvatar = document.querySelector('.popup__form_type_avatar');
export const popupDeleteCard = document.querySelector('.popup-delete');
export const popupChangeAvatar = document.querySelector('.popup_type_change-avatar');
export const personAvatarButton = document.querySelector('.person__avatar-button');
export const popupDeleteButton = document.querySelector('.popup-delete__submit-button');


export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_anactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error',
  errorClassActive: 'popup__input-error_active',
  sectionInput: '.popup__input-section',
}

import arkhyz from '../images/arkhyz.jpg'
import chelyabinsk from '../images/chelyabinsk-oblast.jpg';
import ivanovo from '../images/ivanovo.jpg';
import kamchatka from '../images/kamchatka.jpg';
import kholmogorsky from '../images/kholmogorsky-rayon.jpg';
import baikal from '../images/baikal.jpg';

export const initialCards = [
  {
    name: 'Архыз',
    link: arkhyz
  },
  {
    name: 'Челябинская область',
    link: chelyabinsk
  },
  {
    name: 'Иваново',
    link: ivanovo
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Холмогорский район',
    link: kholmogorsky
  },
  {
    name: 'Байкал',
    link: baikal
  }
];

export const personData = {
  nameSelector: '.person__name',
  infoSelector: '.person__profession',
  avatar : '.person__avatar'
};
