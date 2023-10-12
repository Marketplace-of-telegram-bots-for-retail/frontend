import React from 'react';
import './ProductReviews.css';
import ProductReviewInitial from '../ProductReviewInitial/ProductReviewInitial';
import ReviewCard from '../ReviewCard/ReviewCard';

const ProductReviews = ({ reviews }) => {
  return (
    <div className='product__rewiews'>
      <ul className='product__reviews-group'>
        {reviews.map((review) => {
          return (
            <ReviewCard key={review.id} review={review} />
          );
        })}
      </ul>
      <ProductReviewInitial />
    </div>
  );
};

export default ProductReviews;