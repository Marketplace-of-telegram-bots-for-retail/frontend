import React from 'react';
import './ProductPrice.css';

const ProductPrice = () => {
  return (
    <div className='product__price'>
      <p className='product__price-item'>1 000 ₽</p>
      <button className='product__price-button' type='submit' aria-label='В корзину'>В корзину</button>
    </div>
  );
};

export default ProductPrice;