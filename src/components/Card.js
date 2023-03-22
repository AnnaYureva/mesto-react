import React from 'react';

 function Card(card) {

        function handleCardClick() {
        card.onCardClick(card);
    }

   return (
    <article className="elements__item">
    <button aria-label="Удалить" type="button" className="elements__delete-button"></button>
    <img className="elements__photo" alt={card.name} src={card.link} onClick={handleCardClick}/>
    <div className="elements__description">
        <h2 className="elements__name">{card.name}</h2>
        <div className="elements__like-container">
            <button aria-label="Нравится" type="button" className="elements__like"></button>
            <div className="elements__likes-count">{card.likes.length}</div>
        </div>
    </div>
</article>
   )
}

export default Card;
