import React from 'react';
import { Link } from 'react-router-dom';
import './PreviewImage.css';
import { COLORS_PREVIEW } from '../../utils/constants';

const PreviewImage = ({ card, parentClass }) => {
  const handleCardClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link
      to={`/products/${card.id}`}
      className={`${parentClass}__preview preview`}
      onClick={() => handleCardClick()}
      style={{ backgroundColor: COLORS_PREVIEW[card?.category?.id] }}
      state={card}
    >
      <p className='preview__text'>{card?.category?.name || 'Без категории'}</p>
    </Link>
  );
};

export default PreviewImage;
