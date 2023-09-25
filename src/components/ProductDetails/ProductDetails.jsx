import React from 'react';
import './ProductDetails.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductPriceBlock from '../ProductPriceBlock/ProductPriceBlock';

const ProductDetails = () => {
  return (
    <div className='product__good-details'>
      <ProductDetail />
      <ProductPriceBlock />
    </div>
  );
};

export default ProductDetails;