import React, { useState } from 'react';
import './Card.css';
import defaultCover from '../../images/default-cover.svg';

export const Card = ({ card, onLike }) => {
  const [isLiked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!isLiked);
    onLike();
  };

  const cardLikeButtonClassName = `card__like ${
    isLiked ? 'card__like_active' : ''
  }`;

  return (
    <div className='card'>
      <button
        type='button'
        className={cardLikeButtonClassName}
        onClick={handleClick}
      ></button>
      <img
        className='card__cover'
        src={card?.img || defaultCover}
        alt='обложка'
      />
      <p className='card__title'>
        {card?.name || 'Название бота, которое может занимать 2 строки'}
      </p>
      <div className='card__rating'></div>
      <p className='card__about'>
        {card?.about ||
          'Описание бота, которое может занимать 3 строки. Описание бота, которое может занимать 3 строки.'}
      </p>
      <p className='card__price'>{`${card?.price} ₽`}</p>
      <button
        className='card__button_large'
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
