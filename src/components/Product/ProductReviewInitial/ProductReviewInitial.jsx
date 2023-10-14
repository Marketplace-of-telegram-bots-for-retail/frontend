import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductReviewInitial.css';
// import StarRating from '../../StarRating/StarRating';
import { Rating } from '../../Rating/Rating';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';

const ProductReviewInitial = ({
  reviews,
  count,
  sendFeedback,
  handleShowAllReviews,
}) => {
  const [isShown, setIsShown] = useState(false);
  const { id } = useParams();
  const { values, setValues, handleChange } = useFormWithValidation({});
  const [star, setStar] = useState();
  const limit = count < reviews.length;
  // const event = new Date().toLocaleString();
  console.log(values.text);
  console.log(star);

  useEffect(() => {
    setValues('');
  }, [setValues]);

  function handleFeedbackClick() {
    setIsShown(!isShown);
  }

  function handleSendClick(e) {
    e.preventDefault();
    console.log('click send rewiew');
    sendFeedback(id, {
      modified: new Date().toJSON(),
      rating: star,
      text: values.text,
    });
    setValues('');
  }
  /*
  function onChange(e) {
    setTextReview(e.target.value);
  }
  */

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
          >
            Оставить отзыв
          </button>
        </form>
      )}
    </>
  );
};

export default ProductReviewInitial;
