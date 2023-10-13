import React from 'react';
import './ProductDetails.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductPriceBlock from '../ProductPriceBlock/ProductPriceBlock';

const ProductDetails = ({ card, handleFullScreenClick, reviews, sendFeedback }) => {
  return (
    <div className='product__good-details'>
      <ProductDetail card={card} handleFullScreenClick={handleFullScreenClick} reviews={reviews} sendFeedback={sendFeedback} />
      <ProductPriceBlock card={card} />
    </div>
  );
};

export default ProductDetails;