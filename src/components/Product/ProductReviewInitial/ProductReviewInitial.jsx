import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductReviewInitial.css';
import { Rating } from '../../Rating/Rating';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';

const ProductReviewInitial = ({
  reviews,
  count,
  sendFeedback,
  handleShowAllReviews,
  setState,
  star,
  setStar
}) => {
  const [isShown, setIsShown] = useState(false);
  const { id } = useParams();
  const { values, setValues, handleChange } = useFormWithValidation({});
  const limit = count < reviews.length;
  const [ratingFeedback, setRatingFeedback] = useState('show');

  useEffect(() => {
    setValues('');
  }, [setValues]);

  useEffect(() => {
    setRatingFeedback('without');
  }, [setRatingFeedback]);

  function handleFeedbackClick() {
    setIsShown(!isShown);
  }

  function handleSendClick(e) {
    e.preventDefault();
    sendFeedback(id, {
      modified: new Date().toJSON(),
      rating: star,
      text: values.text,
    });
    setValues('');
  }

  function onShow() {
    handleShowAllReviews();
  }

  return (
    <>
      <div className='product__review-initial'>
        {isShown && (
          <span className='product__review-question'>Вам понравился бот?</span>
        )}
        {!isShown && (
          <button
            className='product__review-open'
            type='button'
            onClick={handleFeedbackClick}
            aria-label='Оставить отзыв'
          >
            Оставить отзыв
          </button>
        )}
        {limit && (
          <button
            className='product__review-show'
            type='button'
            onClick={onShow}
            aria-label='Показать все'
          >
            Показать все
          </button>
        )}
      </div>
      {isShown && (
        <form className='product__review-block' onSubmit={handleSendClick}>
          <Rating
            ratingCard={reviews.rating}
            onStarClick={() => {
              console.log('object');
            }}
            setStar={setStar}
            setState={setState}
            ratingFeedback={ratingFeedback}
          />
          <textarea
            className='product__review-input'
            value={values.text || ''}
            onChange={handleChange}
            type='text'
            id='feedback'
            name='text'
            placeholder='сюда можно написать отзыв'
            autoComplete='off'
          />
          <button
            className='product__review-send'
            type='submit'
            aria-label='Оставить отзыв'
            disabled={!star}
          >
            Оставить отзыв
          </button>
        </form>
      )}
    </>
  );
};

export default ProductReviewInitial;
