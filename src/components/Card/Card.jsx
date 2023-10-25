import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { Rating } from '../Rating/Rating';
import { CartButton, LikeButton } from '../buttons';

const Card = ({ card }) => {
  const handleCardClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const colorsPreview = [
    '#FAAE1A80',
    '#FF8F6EB2',
    '#75B2F380',
    '#00B78B99',
    '#D9D9D9',
  ];

  return (
    <div className='cards__card card'>
      <div className='card__wrapper'>
        <LikeButton parentClass='card' card={card} />
        <Link
          to={`/products/${card.id}`}
          className='card__preview'
          onClick={() => handleCardClick()}
          style={{ backgroundColor: colorsPreview[card?.category[0]?.id] }}
          state={card}
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
      </div>
      <div className='card__wrapper'>
        <p className='card__price'>{`${card?.price} ₽`}</p>
        <CartButton parentClass='card' card={card} />
      </div>
    </div>
  );
};

export default Card;
