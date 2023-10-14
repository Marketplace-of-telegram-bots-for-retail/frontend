import React from 'react';
import './ReviewCard.css';
// import StarRating from '../../StarRating/StarRating';
import { Rating } from '../../Rating/Rating';
import avatar from '../../../images/Group.svg';

const ReviewCard = ({ review }) => {
  return (
    <li className='product__review'>
      <div className='product__review-row'>
        <div className='product__review-set'>
          <img className='product__review-avatar' src={avatar} alt='аватар' />
          <span className='product__review-author'>{review.user}</span>
        </div>
        <div className='product__review-set'>
          <span className='product__review-date'>{review.modified}</span>
          <Rating ratingCard={review.rating} />
        </div>
      </div>
      <p className='product__review-text'>{review.text}</p>
    </li>
  );
};

export default ReviewCard;