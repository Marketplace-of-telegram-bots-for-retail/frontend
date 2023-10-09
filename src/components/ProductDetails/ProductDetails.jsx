import React from 'react';
import './ProductDetails.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductPriceBlock from '../ProductPriceBlock/ProductPriceBlock';

const ProductDetails = ({ card, handleFullScreenClick }) => {
  return (
    <div className='product__good-details'>
      <ProductDetail card={card} handleFullScreenClick={handleFullScreenClick} />
      <ProductPriceBlock card={card} />
    </div>
  );
};

export default ProductDetails;