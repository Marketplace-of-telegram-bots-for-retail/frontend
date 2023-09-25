import React from 'react';
import './ProductQuestions.css';

const ProductQuestions = () => {
  return (
    <div className='product__questions'>
      <h2 className='product__questions-title'>Часто задаваемые вопросы</h2>
      <ul className='product__questions-items'>
        <li className='product__questions-item'>
          <p className='product__questions-text'>Что входит в стоимость</p>
          <button className='product__questions-open' type='button'></button>
        </li>
        <li className='product__questions-item'>
          <p className='product__questions-text'>Куда пришлют бота</p>
          <button className='product__questions-open' type='button'></button>
        </li>
        <li className='product__questions-item'>
          <p className='product__questions-text'>Как подключить бота</p>
          <button className='product__questions-open' type='button'></button>
        </li>
      </ul>
    </div>
  );
};

export default ProductQuestions;