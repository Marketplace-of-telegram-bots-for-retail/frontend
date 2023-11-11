import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCartData } from '../../../store';
import './Goods.css';
import GoodsNewBot from './GoodsNewBot/GoodsNewBot';
import CartCard from '../../Cart/CartCard/CartCard';
import Dropdown from '../../showcase/Dropdown/Dropdown';

const Goods = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShownGoods, setIsShownGoods] = useState(true);
  const { items } = useSelector(getCartData);

  function handleAddClick() {
    setIsShown(!isShown);
    setIsShownGoods(!isShownGoods);
  }
  function handleEditBot() {
    setIsShown(true);
    setIsShownGoods(false);
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
      {isShown && <GoodsNewBot />}
      {isShownGoods && <Dropdown></Dropdown>}
      {isShownGoods &&
        items.map((item) => {
          return (
            <CartCard key={item.id} item={item} setIsShown={handleEditBot} />
          );
        })}
    </section>
  );
};

export default Goods;
