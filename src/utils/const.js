
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButton: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const cardsContainer = document.querySelector(".elements");
const profileEditButton = document.querySelector(".profile__edit-button");
const cardAddButton = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector("#popup-edit-profile");
const popupAddCard = document.querySelector("#popup-add-card");
const avatarEditButton = document.querySelector(".profile__image-edit");
const popupAvatar = document.querySelector("#popup-avatar-change");

export {
  initialCards,
  validationConfig,
  cardsContainer,
  profileEditButton,
  cardAddButton,
  popupEditProfile,
  popupAddCard,
  avatarEditButton,
  popupAvatar,
};
