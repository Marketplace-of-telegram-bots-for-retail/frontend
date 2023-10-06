import React, { useState } from 'react';
import './ProductReviewInitial.css';
import StarRating from '../StarRating/StarRating';

const ProductReviewInitial = () => {
  const [isShown, setIsShown] = useState(false);

  function handleFeedbackClick() {
    setIsShown((current) => !current);
  }
  return (
    <>
      <div className='product__review-initial'>
        <button className='product__review-open' type='button' onClick={handleFeedbackClick} aria-label='Оставить отзыв'>Оставить отзыв</button>
        <button className='product__review-show' type='button' aria-label='Показать все'>Показать все</button>
      </div>
      {isShown && (
        <div className='product__review-block'>
          <StarRating />
          <input className='product__review-input' type='text' id='feedback' name='feedback' placeholder='сюда можно написать отзыв' autoComplete='off' />
        </div>
      )}
    </>
  );
};

export default ProductReviewInitial;