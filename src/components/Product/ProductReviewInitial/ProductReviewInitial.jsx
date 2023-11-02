import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { getAuthorisationData } from '../../../store';

const ProductReviewInitial = ({ reviews, count, onShowAllReviews }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isShown, setIsShown] = useState(false);
  const { id } = useParams();
  const { values, setValues, handleChange } = useForm({});
  const [star, setStar] = useState(null);
  const { isAuthorised } = useSelector(getAuthorisationData);
  const limit = count < reviews.length;
  const [isDataChanged, setIsDataChanged] = useState(false);
  // заменить на userID
  const currentReview = reviews.filter(
    (c) => c.user === currentUser.username
  )[0];
  // console.log(currentReview);
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
      (currentReview.text !== values.text || currentReview.rating !== star) &&
      values.text &&
      values.text.length > 5
        ? setIsDataChanged(true)
        : setIsDataChanged(false);
    }
    if (!currentReview) {
      (values.text && values.text.length > 5) && star
        ? setIsDataChanged(true)
        : setIsDataChanged(false);
    }
  }, [currentReview, values.text, star]);

  function handleFeedbackClick() {
    setIsShown(!isShown);
  }

  function handleEditFeedbackClick() {
    setIsShown(!isShown);
    if (currentReview) {
      setStar(currentReview.rating);
      setValues({
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

  function handleDeleteClick(e) {
    e.preventDefault();
    const reviewId = currentReview.id;
    deleteFeedback(id, reviewId);
    setIsShown(false);
  }

  return (
    <>
      <div className='product__review-initial'>
        {isShown && (
          <span className='product__review-question'>Вам понравился бот?</span>
        )}
        {!isShown &&
          isAuthorised &&
          (!currentReview ? (
            <button
              className='product__review-open'
              type='button'
              onClick={() => handleFeedbackClick()}
              aria-label='Оставить отзыв'
            >
              Оставить отзыв
            </button>
          ) : (
            <button
              className='product__review-open'
              type='button'
              onClick={() => handleEditFeedbackClick()}
              aria-label='Оставить отзыв'
            >
              Редактировать отзыв
            </button>
          ))}
        {limit && (
          <button
            className='product__review-show'
            type='button'
            onClick={() => onShowAllReviews()}
            aria-label='Показать все'
          >
            Показать все
          </button>
        )}
      </div>
      {isShown && (
        <form className='product__review-block'>
          <Rating
            feedbackStars={currentReview?.rating || 0}
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
              disabled={!isDataChanged}
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
