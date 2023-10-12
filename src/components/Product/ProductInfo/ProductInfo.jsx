import React from 'react';
import './ProductInfo.css';
import { LikeButton } from '../../Buttons';
import { Rating } from '../../Rating/Rating';

const ProductInfo = ({ card, onLike }) => {
  return (
    <div className='product__good-info'>
      <Rating ratingCard={card.rating} />
      <LikeButton parentClass='product' onLike={onLike} card={card} />
    </div>
  );
};

export default ProductInfo;
