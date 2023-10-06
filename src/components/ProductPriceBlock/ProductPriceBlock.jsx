import React from 'react';
import './ProductPriceBlock.css';
import ProductPrice from '../ProductPrice/ProductPrice';
import info from '../../images/octicon_info-24.svg';

const ProductPriceBlock = () => {
  return (
    <div className='product__price-block'>
      <ProductPrice />
      <div className='price-block__information'>
        <img className='price-block__icon' src={info} alt='информация' />
        <p className='price-block__text'>В стоимость входит скрипт бота и инструкция по установке</p>
      </div>
    </div>
  );
};

export default ProductPriceBlock;