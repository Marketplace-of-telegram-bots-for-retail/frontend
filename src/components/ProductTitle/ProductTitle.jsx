import React from 'react';
import './ProductTitle.css';

const ProductTitle = () => {
  return (
    <div className='product__title-info'>
      <h1 className='product__title'>Наименование бота в 1 строку Наименование бота в 1 строку...</h1>
      <p className='product__article'>Артикул: 000001</p>
    </div>
  );
};

export default ProductTitle;