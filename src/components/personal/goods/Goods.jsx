import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, getSellersProducts } from '../../../store';
import './Goods.css';
import GoodsNewBot from './GoodsNewBot/GoodsNewBot';
import CartCard from '../../Cart/CartCard/CartCard';
import Dropdown from '../../showcase/Dropdown/Dropdown';
import { getMyProducts } from '../../../store/actions';

const Goods = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShownGoods, setIsShownGoods] = useState(true);
  const { items } = useSelector(getCartData);
  const dispatch = useDispatch();
  const { goods } = useSelector(getSellersProducts);
  function handleAddClick() {
    setIsShown(!isShown);
    setIsShownGoods(!isShownGoods);
  }
  function handleEditBot() {
    setIsShown(true);
    setIsShownGoods(false);
  }
  useEffect(() => {
    dispatch(getMyProducts());
    console.log(goods);
  }, []);
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
