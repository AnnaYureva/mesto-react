import React from "react";
import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <div className="page">
        <Header />

        <Main
          onEditProfile={setEditProfilePopupOpen}
          onAddPlace={setAddPlacePopupOpen}
          onEditAvatar={setEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
        />

        <Footer />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm
          name="popup-edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              id="popup-username"
              name="username"
              type="text"
              placeholder="Имя"
              className="popup__input popup__input_type_username"
              minLength="2"
              maxLength="40"
              required
            />
            <span id="popup-username-error" className="popup__error"></span>
          </label>
          <label className="popup__label">
            <input
              id="popup-profession"
              name="profession"
              type="text"
              placeholder="Профессия"
              className="popup__input popup__input_type_profession"
              minLength="2"
              maxLength="200"
              required
            />
            <span id="popup-profession-error" className="popup__error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="popup-avatar-change"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              id="popup-avatar"
              name="avatar"
              type="url"
              placeholder="Введите ссылку на аватар"
              className="popup__input popup__input_type_avatar"
            />
            <span id="popup-avatar-error" className="popup__error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="popup-add-card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              id="popup-place"
              name="username"
              type="text"
              placeholder="Название"
              className="popup__input popup__input_type_username"
              minLength="2"
              maxLength="30"
              required
            />
            <span id="popup-place-error" className="popup__error"></span>
          </label>
          <label className="popup__label">
            <input
              id="popup-link"
              name="profession"
              type="url"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_profession"
              required
            />
            <span id="popup-link-error" className="popup__error"></span>
          </label>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
