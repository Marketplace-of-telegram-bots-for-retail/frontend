import React, { useState } from 'react';
import './ProductReviews.css';
import ProductReviewInitial from '../ProductReviewInitial/ProductReviewInitial';
import ReviewCard from '../ReviewCard/ReviewCard';

const ProductReviews = ({ reviews, setState, star, setStar }) => {
  const [count, setCount] = useState(3);
  const allReviews = reviews.length;

  function handleShowAllReviews() {
    setCount(allReviews);
  }

  return (
    <div className='product__rewiews' id='reviews'>
      {allReviews === 0 ? (
        <p className='product__rewiews-none'>У этого бота пока нет отзывов.</p>
      ) : (
        <ul className='product__reviews-group'>
          {reviews.slice(0, count).map((review) => {
            return <ReviewCard key={review.id} review={review} />;
          })}
        </ul>
      )}
      <ProductReviewInitial
        reviews={reviews}
        count={count}
        handleShowAllReviews={handleShowAllReviews}
        setState={setState}
        star={star}
        setStar={setStar}
      />
    </div>
  );
};

export default ProductReviews;
