import React, { useState } from 'react';
import './ProductReviews.css';
import ProductReviewInitial from '../ProductReviewInitial/ProductReviewInitial';
import ReviewCard from '../ReviewCard/ReviewCard';

const ProductReviews = ({
  reviews,
  sendFeedback,
  ratingFeedback,
  setRatingFeedback
}) => {
  const [count, setCount] = useState(3);
  const allReviews = reviews.length;

  function handleShowAllReviews() {
    setCount(allReviews);
  }

  return (
    <div className='product__rewiews'>
      {
        allReviews === 0 ? (
          <p className='product__rewiews-none'>У этого бота пока нет отзывов.</p>
        ) : (
          <ul className='product__reviews-group'>
            {reviews.slice(0, count).map((review) => {
              return <ReviewCard
                key={review.id}
                review={review}
                ratingFeedback={ratingFeedback}
                setRatingFeedback={setRatingFeedback}
              />;
            })}
          </ul>
        )
      }
      <ProductReviewInitial
        reviews={reviews}
        count={count}
        sendFeedback={sendFeedback}
        handleShowAllReviews={handleShowAllReviews}
        ratingFeedback={ratingFeedback}
        setRatingFeedback={setRatingFeedback}
      />
    </div>
  );
};

export default ProductReviews;
