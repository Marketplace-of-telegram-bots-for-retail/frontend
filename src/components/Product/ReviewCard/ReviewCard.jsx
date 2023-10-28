import React from 'react';
import './ReviewCard.css';
import { Rating } from '../../Rating/Rating';
import avatar from '../../../images/Group.svg';

const ReviewCard = ({ review }) => {
  const date = new Date(review.modified).toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedDate = `${date}`;

  return (
    <li className='product__review'>
      <div className='product__review-row'>
        <div className='product__review-set'>
          <img className='product__review-avatar' src={avatar} alt='аватар' />
          <span className='product__review-author'>{review.user}</span>
        </div>
        <div className='product__review-set'>
          <span className='product__review-date'>{formattedDate}</span>
          <Rating feedbackStars={review.rating} />
        </div>
      </div>
      <p className='product__review-text'>{review.text}</p>
    </li>
  );
};

export default ReviewCard;
