import React from 'react';
import './ProductPrice.css';
import { CartButton } from '../../buttons';

const ProductPrice = ({ card }) => {
  console.log(card.price);
  return (
    <div className='product__price'>
      <p className='product__price-item'>{`${card?.price?.toLocaleString('ru-RU')} ₽`}</p>
      <CartButton parentClass='card' card={card} />
    </div>
  );
};

export default ProductPrice;
