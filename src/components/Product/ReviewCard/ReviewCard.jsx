import React, { useEffect, useState } from 'react';
import './ReviewCard.css';
import { Rating } from '../../Rating/Rating';
import avatar from '../../../images/Group.svg';

const ReviewCard = ({ review }) => {
  const [ratingFeedback, setRatingFeedback] = useState('show');
  const date = new Date(review.modified);
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  useEffect(() => {
    setRatingFeedback('without');
  }, [setRatingFeedback]);

  return (
    <li className='product__review'>
      <div className='product__review-row'>
        <div className='product__review-set'>
          <img className='product__review-avatar' src={avatar} alt='аватар' />
          <span className='product__review-author'>{review.user}</span>
        </div>
        <div className='product__review-set'>
          <span className='product__review-date'>{formattedDate}</span>
          <Rating
            ratingCard={review.rating}
            ratingFeedback={ratingFeedback}
          />
        </div>
      </div>
      <p className='product__review-text'>{review.text}</p>
    </li>
  );
};

export default ReviewCard;