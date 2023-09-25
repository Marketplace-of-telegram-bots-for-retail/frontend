import React from 'react';
import './ProductInfo.css';
import StarRating from '../StarRating/StarRating';

const ProductInfo = () => {
  return (
    <div className='product__good-info'>
      <p className='product__good-category'>Автоматизация заказов</p>
      <div className='product__good-raiting'>
        <StarRating />
        <p className='product__good-rewiew'>Оставить отзыв</p>
      </div>
      <div className='product__good-raiting'>
        <button className='product__good-like' type='submit'></button>
        <p className='product__good-add'>Добавить в избранное</p>
      </div>
    </div>
  );
};

export default ProductInfo;