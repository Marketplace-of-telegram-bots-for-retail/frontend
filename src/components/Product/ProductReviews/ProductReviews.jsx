import React, { useState } from 'react';
import './ProductReviews.css';
import ProductReviewInitial from '../ProductReviewInitial/ProductReviewInitial';
import ReviewCard from '../ReviewCard/ReviewCard';

const ProductReviews = ({ reviews }) => {
  const [count, setCount] = useState(3);
  const allReviews = reviews.length;

  function handleShowAllReviews() {
    setCount(allReviews);
  }

  return (
    <div className='product__reviews reviews' id='reviews'>
      {allReviews === 0 ? (
        <p className='reviews__none-text'>У этого бота пока нет отзывов.</p>
      ) : (
        <ul className='reviews__group'>
          {reviews.slice(0, count).map((review) => {
            return <ReviewCard key={review.id} review={review} />;
          })}
        </ul>
      )}
      <ProductReviewInitial
        reviews={reviews}
        count={count}
        onShowAllReviews={handleShowAllReviews}
      />
    </div>
  );
};

export default ProductReviews;
