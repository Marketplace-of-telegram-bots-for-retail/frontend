import React from 'react';
import './ProductInfo.css';
import { Rating } from '../Rating/Rating';

// import StarRating from '../StarRating/StarRating';
import { LikeButton } from '../Buttons/LikeButton/LikeButton';

const ProductInfo = ({ card, onLike }) => {
  console.log('ProductInfo => card', card.rating);
  return (
    <div className='product__good-info'>
      {/* <div className='product__good-raiting'>
        <StarRating />
        <p className='product__good-rewiew'>Оставить отзыв</p>
      </div> */}
      <Rating ratingCard={card.rating} />
      {/* <div className='product__good-raiting'>
        <button className='product__good-like' type='submit'></button>
        <p className='product__good-add'>В избранное</p>
      </div> */}
      <LikeButton parentClass='product' onLike={onLike} card={card} />
    </div>
  );
};

export default ProductInfo;
