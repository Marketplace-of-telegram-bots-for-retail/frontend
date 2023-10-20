import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductReviewInitial.css';
import { Rating } from '../../Rating/Rating';
import { CurrentUserContext } from '../../../contexts/currentUserContext';
import { useForm } from '../../../hooks/useForm';

const ProductReviewInitial = ({
  reviews,
  count,
  sendFeedback,
  editFeedback,
  handleShowAllReviews,
  setState,
  star,
  setStar
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [isShown, setIsShown] = useState(false);
  const { id } = useParams();
  const { values, setValues, handleChange } = useForm({});
  const limit = count < reviews.length;
  const [ratingFeedback, setRatingFeedback] = useState('show');
  const [isReview, setIsReview] = useState(false);
  const [isDataChanged, setIsDataChanged] = useState(false);
  const currentReview = reviews.filter((c) => c.user === currentUser.username);

  useEffect(() => {
    setValues('');
  }, [setValues]);

  useEffect(() => {
    setRatingFeedback('without');
  }, [setRatingFeedback]);

  useEffect(() => {
    if (currentReview.length === 0) {
      setIsReview('false');
      return;
    }
    if (currentReview) {
      setIsReview('true');
    }
  }, [currentReview, reviews]);

  useEffect(() => {
    if (currentReview.length === 0) {
      setIsDataChanged(true);
      return;
    }
    if (currentReview) {
      currentReview[0].text !== values.text ?
        setIsDataChanged(true) : setIsDataChanged(false);
    }
  }, [currentReview, values.text]);

  function handleFeedbackClick() {
    setIsShown(!isShown);
  }

  function handleEditFeedbackClick() {
    setIsShown(!isShown);
    if (currentReview) {
      setValues({
        rating: setStar(),
        text: currentReview[0].text
      });
    }
  }

  function handleSendClick(e) {
    e.preventDefault();
    if (currentReview.length === 0) {
      sendFeedback(id, {
        modified: new Date().toJSON(),
        rating: star,
        text: values.text,
      });
      setValues('');
    } else {
      const reviewId = currentReview[0].id;
      editFeedback(id, reviewId, {
        modified: new Date().toJSON(),
        rating: star,
        text: values.text,
      });
      setValues('');
    }
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
        {!isShown && isReview === 'false' && (
          <button
            className='product__review-open'
            type='button'
            onClick={handleFeedbackClick}
            aria-label='Оставить отзыв'
          >
            Отправить отзыв
          </button>
        )}
        {!isShown && isReview === 'true' && (
          <button
            className='product__review-open'
            type='button'
            onClick={handleEditFeedbackClick}
            aria-label='Оставить отзыв'
          >
            Редактировать отзыв
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
          {currentReview.length === 0 && (
            <Rating
              ratingCard={reviews.rating}
              onStarClick={() => {
                console.log('object');
              }}
              setStar={setStar}
              setState={setState}
              ratingFeedback={ratingFeedback}
            />
          )}
          {currentReview && (
            <Rating
              ratingCard={currentReview[0].rating}
              onStarClick={() => {
                console.log('object');
              }}
              setStar={setStar}
              setState={setState}
              ratingFeedback={ratingFeedback}
            />
          )}
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
            disabled={!star || !isDataChanged}
          >
            Отправить отзыв
          </button>
        </form>
      )}
    </>
  );
};

export default ProductReviewInitial;
