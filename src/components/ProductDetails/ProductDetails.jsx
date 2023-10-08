import React from 'react';
import './ProductDetails.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductPriceBlock from '../ProductPriceBlock/ProductPriceBlock';

const ProductDetails = ({ card, onCardClick }) => {
  return (
    <div className='product__good-details'>
      <ProductDetail card={card} onCardClick={onCardClick} />
      <ProductPriceBlock card={card} />
    </div>
  );
};

export default ProductDetails;