import React, { useEffect, useState } from 'react';
import './ProductInfo.css';
import { LikeButton } from '../../buttons';
import { Rating } from '../../Rating/Rating';

const ProductInfo = ({ card, setState, setStar }) => {
  const [ratingFeedback, setRatingFeedback] = useState('show');

  useEffect(() => {
    setRatingFeedback('show');
  }, [setRatingFeedback]);

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
        setStar={setStar}
        setState={setState}
        ratingFeedback={ratingFeedback}
      />
      <LikeButton parentClass='product' card={card} />
    </div>
  );
};

export default ProductInfo;
