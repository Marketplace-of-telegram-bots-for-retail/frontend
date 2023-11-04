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
import { getAuthorisationData, getProductCardData } from '../../../store';
import { ReactComponent as PolygonSVG } from '../../../images/Polygon-2.svg';

const ProductReviewInitial = ({ reviews, count, onShowAllReviews }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isShown, setIsShown] = useState(false);
  const { id } = useParams();
  const { values, setValues, handleChange } = useForm({});
  const [star, setStar] = useState(null);
  const { isAuthorized } = useSelector(getAuthorisationData);
  const limit = count < reviews.length;
  const [isDataChanged, setIsDataChanged] = useState(false);
  const { is_Bought } = useSelector(getProductCardData).productCard;
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
      values.text && values.text.length > 5 && star
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
  const PopoverHint = (
    <div className='product__popover'>
      <p className='popover__text'>
        {!isAuthorized
          ? 'Сначала авторизуйтесь'
          : !is_Bought && 'Отзыв можно оставить только после покупки бота'}
      </p>
      <PolygonSVG className='popover__svg' />
    </div>
  );
  return (
    <>
      <div className='product__review-initial'>
        {isShown && (
          <span className='product__review-question'>Вам понравился бот?</span>
        )}
        {!isShown &&
          (!currentReview ? (
            <div className='product__button-wrapper'>
              <button
                className='product__review-open'
                type='button'
                onClick={() => handleFeedbackClick()}
                aria-label='Оставить отзыв'
                // disabled={!isAuthorized || !is_Bought}
                disabled={!isAuthorized}
              >
                Оставить отзыв
              </button>
              {PopoverHint}
            </div>
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
        <div
          className='product__review-wrapper'
          style={{ outline: '1px solid gray' }}
          onClick={(e) => {
            console.log(e.target, e.currentTarget);
            if (e.target === e.currentTarget) {
              setIsShown(false);
            }
          }}
        >
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
        </div>
      )}
    </>
  );
};

export default ProductReviewInitial;
