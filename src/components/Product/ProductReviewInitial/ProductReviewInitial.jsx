import React, { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ProductReviewInitial.css';
import { Rating } from '../../Rating/Rating';
import { CurrentUserContext } from '../../../contexts/currentUserContext';
import { useForm } from '../../../hooks/useForm';
import {
  changeProductReview,
  deleteProductReview,
  sendProductReview,
} from '../../../store/productCardDataSlice';

const ProductReviewInitial = ({ reviews, count, handleShowAllReviews }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isShown, setIsShown] = useState(false);
  const { id } = useParams();
  const { values, setValues, handleChange } = useForm({});
  const [star, setStar] = useState();

  const limit = count < reviews.length;
  const [isDataChanged, setIsDataChanged] = useState(false);
  // заменить на userID
  const currentReview = reviews.filter(
    (c) => c.user === currentUser.username
  )[0];
  console.log(currentReview);
  const dispatch = useDispatch();

  // Функции работы с апи отзывов
  function sendFeedback(id, data) {
    dispatch(sendProductReview({ id, data }));
  }
  function editFeedback(id, reviewId, data) {
    dispatch(changeProductReview({ id, reviewId, data }));
  }
  function deleteFeedback(id, reviewId) {
    dispatch(deleteProductReview({ id, reviewId }));
  }

  useEffect(() => {
    setValues('');
  }, [setValues]);

  useEffect(() => {
    if (currentReview) {
      currentReview.text !== values.text
        ? setIsDataChanged(true)
        : setIsDataChanged(false);
    }
    if (!currentReview) {
      setIsDataChanged(true);
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
        text: currentReview.text,
      });
    }
  }

  function handleSendClick(e) {
    e.preventDefault();
    if (currentReview) {
      const reviewId = currentReview.id;
      editFeedback(id, reviewId, {
        modified: new Date().toJSON(),
        rating: star,
        text: values.text,
      });
      setValues('');
    } else {
      sendFeedback(id, {
        modified: new Date().toJSON(),
        rating: star,
        text: values.text,
      });
      setValues('');
    }
    setIsShown(false);
  }

  function handleDeleteClick() {
    const reviewId = currentReview.id;
    deleteFeedback(id, reviewId);
  }

  return (
    <>
      <div className='product__review-initial'>
        {isShown && (
          <span className='product__review-question'>Вам понравился бот?</span>
        )}
        {!isShown && !currentReview && (
          <button
            className='product__review-open'
            type='button'
            onClick={() => handleFeedbackClick()}
            aria-label='Оставить отзыв'
          >
            Оставить отзыв
          </button>
        )}
        {!isShown && currentReview && (
          <button
            className='product__review-open'
            type='button'
            onClick={() => handleEditFeedbackClick()}
            aria-label='Оставить отзыв'
          >
            Редактировать отзыв
          </button>
        )}
        {limit && (
          <button
            className='product__review-show'
            type='button'
            onClick={() => handleShowAllReviews()}
            aria-label='Показать все'
          >
            Показать все
          </button>
        )}
      </div>
      {isShown && (
        <form className='product__review-block'>
          <Rating
            feedbackStars={currentReview?.rating || 5}
            onClickStar={(i) => {
              console.log(i);
              setStar(i);
            }}
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
            maxLength={500}
          />
          <div className='product__review-buttons'>
            <button
              className='product__review-send'
              type='submit'
              aria-label='Оставить отзыв'
              disabled={!star || !isDataChanged}
              onClick={handleSendClick}
            >
              Оставить отзыв
            </button>
            {currentReview && (
              <button
                className='product__review-delete'
                type='submit'
                aria-label='Оставить отзыв'
                onClick={handleDeleteClick}
              >
                Удалить отзыв
              </button>
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default ProductReviewInitial;
