import React from 'react';
import './ProductPrice.css';
import { CartButton } from '../../buttons';

const ProductPrice = ({ card }) => {
  return (
    <div className='product__price'>
      <p className='product__price-item'>{`${card.price} ₽`}</p>
      <CartButton parentClass='card' card={card} />
    </div>
  );
};

export default ProductPrice;