import React, { useEffect } from 'react';
import './ProductInfo.css';
import { LikeButton } from '../../Buttons';
import { Rating } from '../../Rating/Rating';

const ProductInfo = ({ card, onLike, ratingFeedback, setRatingFeedback }) => {
  useEffect(() => {
    setRatingFeedback('show');
  });

  return (
    <div className='product__good-info'>
      <Rating
        ratingCard={card.rating}
        onStarClick={() => {
          console.log('object');
        }}
        onReviewClick={() => {
          console.log('object');
        }}
        ratingFeedback={ratingFeedback}
      />
      <LikeButton parentClass='product' onLike={onLike} card={card} />
    </div>
  );
};

export default ProductInfo;
