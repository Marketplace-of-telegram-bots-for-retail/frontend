import React from 'react';
import './ReviewCard.css';
import { Rating } from '../../Rating/Rating';
import avatar from '../../../images/Group.svg';

const ReviewCard = ({ review }) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const date = new Date(review.modified)
    .toLocaleString('ru-RU', options)
    .replace(/\s*г\./, '');
  const formattedDate = `${date}`;

  return (
    <li className='product__review'>
      <div className='review__row'>
        <div className='review__set'>
          <img className='review__avatar' src={avatar} alt='аватар' />
          <span className='review__author'>{review.user}</span>
        </div>
        <div className='review__set'>
          <span className='review__date'>{formattedDate}</span>
          <Rating feedbackStars={review.rating} />
        </div>
      </div>
      <p className='review__text'>{review.text}</p>
    </li>
  );
};

export default ReviewCard;
