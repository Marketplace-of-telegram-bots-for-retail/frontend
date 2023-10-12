import React, { useState } from 'react';
import './ProductReviewInitial.css';
import StarRating from '../../StarRating/StarRating';

const ProductReviewInitial = () => {
  const [isShown, setIsShown] = useState(false);

  function handleFeedbackClick() {
    setIsShown(!isShown);
  }

  function handleSendClick() {
    console.log('click send rewiew');
  }

  return (
    <>
      <div className='product__review-initial'>
        {isShown && (
          <span className='product__review-question'>Вам понравился бот?</span>
        )}
        {!isShown && (
          <button className='product__review-open' type='button' onClick={handleFeedbackClick} aria-label='Оставить отзыв'>Оставить отзыв</button>
        )}
        <button className='product__review-show' type='button' aria-label='Показать все'>Показать все</button>
      </div>
      {isShown && (
        <div className='product__review-block'>
          <StarRating />
          <textarea className='product__review-input' type='text' id='feedback' name='feedback' placeholder='сюда можно написать отзыв' autoComplete='off' />
          <button className='product__review-send' type='submit' onClick={handleSendClick} aria-label='Оставить отзыв'>Оставить отзыв</button>
        </div>
      )}
    </>
  );
};

export default ProductReviewInitial;