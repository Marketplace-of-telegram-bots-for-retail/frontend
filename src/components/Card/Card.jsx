import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import defaultCover from '../../images/default-cover.svg';
import { Rating } from '../Rating/Rating';

export const Card = ({ card, onLike }) => {
  const [isLiked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!isLiked);
    onLike();
  };

  const handleCardClick = () => {
    console.log('img => Click!');
  };

  const cardLikeButtonClassName = `card__like ${
    isLiked ? 'card__like_active' : ''
  }`;

  return (
    <div className='card'>
      <button
        type='button'
        className={cardLikeButtonClassName}
        onClick={handleLikeClick}
      ></button>
      <Link to={`${card._id}`}>
        <img
          className='card__cover'
          src={card?.img || defaultCover}
          alt='обложка'
          onClick={() => handleCardClick()}
        />
      </Link>

      <p className='card__title'>
        {card?.name || 'Название бота, которое может занимать 2 строки'}
      </p>
      <Rating ratingCard={card?.rating} />
      <p className='card__about'>
        {card?.about ||
          'Описание бота, которое может занимать 3 строки. Описание бота, которое может занимать 3 строки.'}
      </p>
      <p className='card__price'>{`${card?.price} ₽`}</p>
      <button
        className='card__button_large_solid'
        type='button'
        onClick={() => {
          console.log('to cart => Click!');
        }}
      >
        В корзину
      </button>
    </div>
  );
};
