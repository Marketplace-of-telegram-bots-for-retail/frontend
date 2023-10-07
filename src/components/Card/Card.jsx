import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
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

  const colorsPreview = [
    '#FAAE1A80',
    '#FF8F6EB2',
    '#75B2F380',
    '#00B78B99',
    '#D9D9D9',
  ];

  return (
    <div className='card'>
      <button
        type='button'
        className={cardLikeButtonClassName}
        onClick={handleLikeClick}
      ></button>
      <Link
        to={`${card.id}`}
        className='card__preview'
        onClick={() => handleCardClick()}
        style={{ backgroundColor: colorsPreview[card?.category[0]?.id] }}
      >
        <p className='card__preview-text'>
          {card?.category[0]?.name || 'Без категории'}
        </p>
      </Link>
      <p className='card__title'>
        {card?.name || 'Название бота, которое может занимать 2 строки'}
      </p>
      <Rating ratingCard={card?.rating} />
      <p className='card__about'>
        {card?.description ||
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
