import React from 'react';
import './ProductInfo.css';
import StarRating from '../../StarRating/StarRating';
import { LikeButton } from '../../Buttons/LikeButton/LikeButton';

const ProductInfo = ({ card, onLike }) => {
  return (
    <div className='product__good-info'>
      <div className='product__good-raiting'>
        <StarRating />
        <p className='product__good-rewiew'>Оставить отзыв</p>
      </div>
      {/* <div className='product__good-raiting'>
        <button className='product__good-like' type='submit'></button>
        <p className='product__good-add'>В избранное</p>
      </div> */}
      <LikeButton parentClass='product' onLike={onLike} card={card} />
    </div>
  );
};

export default ProductInfo;
