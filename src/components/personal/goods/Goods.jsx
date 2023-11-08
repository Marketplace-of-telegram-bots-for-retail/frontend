/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Goods.css';
import GoodsNewBot from './GoodsNewBot/GoodsNewBot';

const Goods = () => {
  const [isShown, setIsShown] = useState(false);

  function handleAddClick() {
    setIsShown(!isShown);
  }

  return (
    <section className='goods'>
      <button
        className='goods__add-button'
        type='button'
        aria-label='Добавить товар'
        onClick={handleAddClick}
      >
        Добавить новый
      </button>
      {!isShown && (
        <GoodsNewBot />
      )}
    </section>
  );
};

export default Goods;