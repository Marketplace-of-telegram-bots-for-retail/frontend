import React from 'react';
import './ProductPriceBlock.css';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductQuestions from '../ProductQuestions/ProductQuestions';

const ProductPriceBlock = () => {
  return (
    <div className='product__price-block'>
      <ProductPrice />
      <ProductQuestions />
    </div>
  );
};

export default ProductPriceBlock;