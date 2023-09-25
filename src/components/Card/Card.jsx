import React from 'react';
import './Card.css';
import defaultCover from '../../images/default-cover.svg';

export const Card = ({ card }) => {
  return (
    <div className='card'>
      <div className='card__cover'>
        <img
          className='card__cover'
          src={card?.img || defaultCover}
          alt='обложка'
        />
      </div>
      <p className='card__title'>
        {card?.name || 'Название бота, которое может занимать 2 строки'}
      </p>
      <div className='card__rating'></div>
      <p className='card__about'>
        {card?.about ||
          'Описание бота, которое может занимать 3 строки. Описание бота, которое может занимать 3 строки.'}
      </p>
      <p className='card__price'>{`${card?.price} ₽`}</p>
      <button className='card__button_large' type='button'>
        В корзину
      </button>
    </div>
  );
};
