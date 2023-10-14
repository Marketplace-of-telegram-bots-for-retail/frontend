import React from 'react';
import './ProductPrice.css';
import { CartButton } from '../../Buttons';

const ProductPrice = ({ card }) => {
  return (
    <div className='product__price'>
      <p className='product__price-item'>{`${card.price} ₽`}</p>
      <CartButton parentClass='card' />
    </div>
  );
};

export default ProductPrice;