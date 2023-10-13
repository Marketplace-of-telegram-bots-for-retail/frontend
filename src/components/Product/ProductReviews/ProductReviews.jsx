import React, { useState } from 'react';
import './ProductReviews.css';
import ProductReviewInitial from '../ProductReviewInitial/ProductReviewInitial';
import ReviewCard from '../ReviewCard/ReviewCard';

const ProductReviews = ({ reviews, sendFeedback }) => {
  const [count, setCount] = useState(3);
  const allReviews = reviews.length;
  console.log(allReviews);

  function handleShowAllReviews() {
    setCount(allReviews);
  }

  return (
    <div className='product__rewiews'>
      <ul className='product__reviews-group'>
        {reviews.slice(0, count).map((review) => {
          return (
            <ReviewCard key={review.id} review={review} />
          );
        })}
      </ul>
      <ProductReviewInitial reviews={reviews} count={count} sendFeedback={sendFeedback} handleShowAllReviews={handleShowAllReviews} />
    </div>
  );
};

export default ProductReviews;