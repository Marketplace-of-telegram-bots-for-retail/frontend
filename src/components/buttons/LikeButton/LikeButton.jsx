/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { onLike } from '../../../store/productsDataSlice';
import './LikeButton.css';
import { getAuthorisationData } from '../../../store';

const LikeButton = ({ parentClass, card }) => {
  const [isLiked, setLiked] = useState(card?.is_favorited);
  const dispatch = useDispatch();
  const { isAuthorised } = useSelector(getAuthorisationData);
  useEffect(() => {
    setLiked(card?.is_favorited);
  }, [card?.is_favorited]);
  const dataCard = { ...card, is_favorited: isLiked };
  const handleLikeClick = async () => {
    if (isAuthorised) {
      const resLike = await dispatch(onLike(dataCard));
      const isLike = unwrapResult(resLike);
      setLiked(isLike);
    }
  };

  const buttonTitle = isLiked ? 'В избранном' : 'В избранное';
  const likeButtonClassName = `like-button__icon like-button__icon${
    isLiked ? '_active' : parentClass !== 'card' ? '_default' : '_default-card'
  } ${
    parentClass !== 'card' ? 'like-button__icon_small' : 'like-button__icon_big'
  }`;

  return (
    <div
      className={`${parentClass}__like-button like-button`}
      onClick={() => handleLikeClick()}
    >
      <button type='button' className='like-button__wrapper'>
        <svg
          className={likeButtonClassName}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          {isLiked ? (
            <path d='M14.3058 1.91571C15.2711 1.33347 16.3722 1.0176 17.4978 1C19.2921 1.07837 20.9827 1.86746 22.2001 3.19487C23.4175 4.52227 24.0629 6.2801 23.9952 8.08432C23.9952 14.8923 13.0436 22.7574 12.5778 23.089C12.2319 23.3351 11.7681 23.3351 11.4222 23.089C10.9564 22.7554 0.00483915 14.8923 0.00483915 8.08432C-0.0628841 6.2801 0.582466 4.52227 1.7999 3.19487C3.01733 1.86746 4.70788 1.07837 6.50222 1C7.62781 1.0176 8.72886 1.33347 9.69417 1.91571C10.6595 2.49795 11.4549 3.32594 12 4.31606C12.5451 3.32594 13.3405 2.49795 14.3058 1.91571Z' />
          ) : (
            <path d='M17.4978 1C16.3722 1.0176 15.2711 1.33347 14.3058 1.91571C13.3405 2.49795 12.5451 3.32594 12 4.31606C11.4549 3.32594 10.6595 2.49795 9.69417 1.91571C8.72886 1.33347 7.62781 1.0176 6.50222 1C4.70788 1.07837 3.01733 1.86746 1.7999 3.19487C0.582466 4.52227 -0.0628841 6.2801 0.00483915 8.08432C0.00483915 14.8923 10.9564 22.7554 11.4222 23.089C11.7681 23.3351 12.2319 23.3351 12.5778 23.089C13.0436 22.7574 23.9952 14.8923 23.9952 8.08432C24.0629 6.2801 23.4175 4.52227 22.2001 3.19487C20.9827 1.86746 19.2921 1.07837 17.4978 1ZM12.5944 20.5699C12.2441 20.8442 11.7559 20.8442 11.4056 20.5699C7.99412 17.8984 2.00403 12.326 2.00403 8.08432C1.9357 6.81288 2.37025 5.56585 3.21291 4.61521C4.05557 3.66458 5.23796 3.08746 6.50222 3.00974C7.76647 3.08746 8.94887 3.66458 9.79153 4.61521C10.4118 5.31494 10.8109 6.17524 10.9512 7.08767C11.0337 7.62453 11.4568 8.08432 12 8.08432C12.5432 8.08432 12.9663 7.62453 13.0488 7.08767C13.1891 6.17524 13.5882 5.31494 14.2085 4.61521C15.0511 3.66458 16.2335 3.08746 17.4978 3.00974C18.762 3.08746 19.9444 3.66458 20.7871 4.61521C21.6297 5.56585 22.0643 6.81288 21.996 8.08432C21.996 12.3279 16.0059 17.8986 12.5944 20.5699Z' />
          )}
        </svg>
        {parentClass !== 'card' && (
          <span className='like-button__title'>{buttonTitle}</span>
        )}
      </button>
    </div>
  );
};

export default LikeButton;
