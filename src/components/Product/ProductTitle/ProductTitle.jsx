import React from 'react';
import './ProductTitle.css';

const ProductTitle = ({ card }) => {
  return (
    <div className='product__title-info'>
      <h1 className='product__title'>{card.name}</h1>
      <p className='product__article'>
        <span className='product__article'>Артикул:</span>
        {card.article}
      </p>
    </div>
  );
};

export default ProductTitle;
