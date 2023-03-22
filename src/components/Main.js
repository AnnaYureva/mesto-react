import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);


React.useEffect(() => {
    api.getUserData().then((res) => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
    })
        .catch((err) => console.log(err))

     api.getInitialCards().then((res) => {
        setCards(res.map((data) => ({
            cardId: data._id,
            name: data.name,
            link: data.link,
            likes: data.likes
        })))
    })
        .catch((err) => console.log(err))
}, [])

    return (
<main>
        <section className="profile">
            <div className="profile__info">
                <img className="profile__image" src={userAvatar} alt="Аватар" />
                <button type="button" className="profile__image-edit" onClick={() => {
                            onEditAvatar(true)}}></button>
                <div className="profile__description">
                    <div className="profile__name">
                        <h1 className="profile__username">{userName}</h1>
                        <button aria-label="Открыть" type="button" className="profile__edit-button" 
                        onClick={() => {
                            onEditProfile(true)}}></button>
                    </div>
                    <p className="profile__profession">{userDescription}</p>
                </div>
            </div>
            <button aria-label="Добавить" type="button" className="profile__add-button" onClick={() => {
                            onAddPlace(true)}}></button>
        </section>
        <section className="elements">
        {cards.map((card) => (
                        <Card
                            key={card.cardId}
                            name={card.name}
                            link={card.link}
                            likes={card.likes}
                            onCardClick={onCardClick}/>
                           
                    ))}
        </section>
    </main>

    )
}

export default Main;