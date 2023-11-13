import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSellersProducts } from '../../../store';
import './Goods.css';
import GoodsNewBot from './GoodsNewBot/GoodsNewBot';
import Dropdown from '../../showcase/Dropdown/Dropdown';
import { getMyProducts } from '../../../store/actions';

const Goods = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShownGoods, setIsShownGoods] = useState(true);
  const dispatch = useDispatch();
  const { goods } = useSelector(getSellersProducts);
  const { results } = goods;

  console.log(goods);
  function handleAddClick() {
    setIsShown(!isShown);
    setIsShownGoods(!isShownGoods);
  }
  useEffect(() => {
    dispatch(getMyProducts());
    console.log(results);
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
      {isShownGoods && results && (
        <>
          <Dropdown />
          {results?.map((item) => {
            return <div key={item.id}></div>;
          })}
        </>
      )}
    </section>
  );
};

export default Goods;
