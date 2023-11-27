import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSellersProducts } from '../../../store';
import './Goods.css';
import GoodsNewBot from './GoodsNewBot/GoodsNewBot';
import Dropdown from '../../showcase/Dropdown/Dropdown';
import { getMyProducts } from '../../../store/actions';
import GoodsCard from './GoodsCard/GoodsCard';

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
      {isShown && <GoodsNewBot shownNewBot={() => setIsShown(false)} />}
      {isShownGoods && results && (
        <>
          <Dropdown />
          {results?.map((item) => {
            return (
              <GoodsCard key={item.id} item={item} setIsShown={handleEditBot} />
            );
          })}
        </>
      )}
    </section>
  );
};

export default Goods;
