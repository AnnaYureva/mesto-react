import React from "react";
import { useState, useEffect } from "react";
import CurrentUserContext from '../contexts/CurrentUserContext';

import api from "../utils/Api";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  useEffect(() => {
    api.getUserData()
        .then(profileInfo => setCurrentUser(profileInfo))
        .catch(err => console.log(err))

    api.getInitialCards().then(data => {
        setCards(data.map((card) => ({
            _id: card._id,
            name: card.name,
            link: card.link,
            likes: card.likes,
            owner: card.owner
        })))
    })
        .catch(err => console.log(err))
}, []);

function handleCardLike(card) {
  const isLiked = card.likes.some(el => el._id === currentUser._id);
  api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((el) => el._id === card._id ? newCard : el));
  });
} 

function handleCardDelete(card) {
  api.deleteCard(card._id)
      .then(() => setCards(
          state => state.filter(
              el => el._id !== card._id)))
      .catch(err => console.log(err));
}

function handleUpdateUserData(userData) {
  api.saveUserData(userData)
      .then(data => {
        setCurrentUser(data);
          closeAllPopups();
      })
      .catch(err => console.log(err))
}

function handleUpdateAvatar(userAvatar) {
  api.saveAvatar(userAvatar)
      .then(data => {
        setCurrentUser(data);
          closeAllPopups();
      })
      .catch(err => console.log(err))
}

function handleAddPlaceSubmit(newCardData){
  api.addNewCard(newCardData)
  .then(newCard => {
    setCards([newCard, ...cards]);
    closeAllPopups();
  })
  .catch(err => console.log(err))
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
      <div className="page">
        <Header />

        <Main
          cards={cards}
          onEditProfile={setEditProfilePopupOpen}
          onAddPlace={setAddPlacePopupOpen}
          onEditAvatar={setEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />

        <Footer />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUserData}/> 

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
   
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace ={handleAddPlaceSubmit}/>
  
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
