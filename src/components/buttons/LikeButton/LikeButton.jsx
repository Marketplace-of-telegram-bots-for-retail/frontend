import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { onLike } from '../../../store/dataProductsStateSlice';
import './LikeButton.css';

const LikeButton = ({ parentClass, card }) => {
  const [isLiked, setLiked] = useState(card?.is_favorited);
  const dispatch = useDispatch();
  useEffect(() => {
    setLiked(card?.is_favorited);
  }, [card?.is_favorited]);
  const dataCard = { ...card, is_favorited: isLiked };
  const handleLikeClick = async () => {
    setLiked(unwrapResult(await dispatch(onLike(dataCard))));
  };

  const buttonTitle = isLiked ? 'В избранном' : 'В избранное';
  const likeButtonClassName = `like-button__icon like-button__icon${
    isLiked ? '_active' : '_default'
  }`;

  return (
    <div
      className={`${parentClass}__like-button like-button`}
      onClick={() => handleLikeClick()}
    >
      <button
        type='button'
        className='like-button__wrapper'
        // onMouseLeave={() => {
        //   isLiked
        //     ? setButtonTitle('В избранном')
        //     : setButtonTitle('В избранное');
        // }}
        // onMouseEnter={() => {
        //   isLiked
        //     ? setButtonTitle('Из избранного')
        //     : setButtonTitle('В избранное');
        // }}
      >
        <svg
          className={likeButtonClassName}
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='#726EFA'
        >
          <g clip-path='url(#clip0_592_2978)'>
            {isLiked ? (
              <path d='M11.9215 2.09634C12.7259 1.61114 13.6435 1.34792 14.5815 1.33325C16.0768 1.39856 17.4856 2.05613 18.5001 3.16231C19.5146 4.26848 20.0524 5.73334 19.996 7.23685C19.996 12.9102 10.8696 19.4644 10.4815 19.7408C10.1932 19.9458 9.80677 19.9458 9.51853 19.7408C9.13035 19.4627 0.00403263 12.9102 0.00403263 7.23685C-0.0524034 5.73334 0.485388 4.26848 1.49991 3.16231C2.51444 2.05613 3.92324 1.39856 5.41852 1.33325C6.35651 1.34792 7.27405 1.61114 8.07847 2.09634C8.8829 2.58154 9.54572 3.27153 10 4.09664C10.4543 3.27153 11.1171 2.58154 11.9215 2.09634Z' />
            ) : (
              <path d='M14.5815 0.833252C13.6435 0.847919 12.7259 1.11114 11.9215 1.59634C11.1171 2.08154 10.4543 2.77153 10 3.59664C9.54572 2.77153 8.8829 2.08154 8.07847 1.59634C7.27405 1.11114 6.35651 0.847919 5.41852 0.833252C3.92324 0.898561 2.51444 1.55613 1.49991 2.66231C0.485388 3.76848 -0.0524034 5.23334 0.00403263 6.73685C0.00403263 12.4102 9.13035 18.9627 9.51853 19.2408C9.80677 19.4458 10.1932 19.4458 10.4815 19.2408C10.8696 18.9644 19.996 12.4102 19.996 6.73685C20.0524 5.23334 19.5146 3.76848 18.5001 2.66231C17.4856 1.55613 16.0768 0.898561 14.5815 0.833252ZM10.5936 17.0642C10.2444 17.3398 9.75564 17.3398 9.40637 17.0642C6.54831 14.8093 1.67003 10.2312 1.67003 6.73685C1.61308 5.67732 1.97521 4.63813 2.67742 3.84593C3.37964 3.05373 4.36497 2.5728 5.41852 2.50803C6.47206 2.5728 7.45739 3.05373 8.15961 3.84593C8.67648 4.42903 9.0091 5.14595 9.12596 5.90631C9.19472 6.35369 9.54736 6.73685 10 6.73685C10.4526 6.73685 10.8053 6.35369 10.874 5.90631C10.9909 5.14595 11.3235 4.42903 11.8404 3.84593C12.5426 3.05373 13.5279 2.5728 14.5815 2.50803C15.635 2.5728 16.6204 3.05373 17.3226 3.84593C18.0248 4.63813 18.3869 5.67732 18.33 6.73685C18.33 10.2327 13.4517 14.8095 10.5936 17.0642Z' />
            )}
          </g>
          <defs>
            <clipPath id='clip0_592_2978'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
        <span className='like-button__title'>{buttonTitle}</span>
      </button>
    </div>
  );
};

export default LikeButton;
