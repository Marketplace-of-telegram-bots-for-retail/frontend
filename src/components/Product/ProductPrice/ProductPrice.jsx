import React from 'react';
import './ProductPrice.css';

const ProductPrice = ({ card }) => {
  return (
    <div className='product__price'>
      <p className='product__price-item'>{`${card.price} ₽`}</p>
      <button className='product__price-button' type='submit' aria-label='В корзину'>В корзину</button>
    </div>
  );
};

export default ProductPrice;