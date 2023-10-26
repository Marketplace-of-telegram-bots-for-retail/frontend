/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartItem.css';
import Cross from '../../../images/ic_cross-24.svg';
import CartCard from '../CartCard/CartCard';
import { useForm } from '../../../hooks/useForm';

import {
  selectAllProductsCart,
  unselectAllProductsCart,
  deleteSelectedProductsCart,
  addPromocodeCart,
} from '../../../store/dataCartSlice';

function CartItem() {
  const [isChecked, setIsChecked] = useState(true);
  const { values, handleChange } = useForm({});
  const dispatch = useDispatch();
  const {
    cart_id,
    total_cost,
    total_amount,
    discount_amount,
    discount,
    items,
    status,
    error,
    is_loading,
  } = useSelector((state) => state.dataCart);

  const isAllChecked = useMemo(
    () => items.every((item) => item.is_selected),
    [items]
  );

  useEffect(() => {
    console.log(
      cart_id,
      total_cost,
      total_amount,
      discount_amount,
      discount,
      items,
      status,
      error,
      is_loading
    );
  }, [
    cart_id,
    total_cost,
    total_amount,
    discount_amount,
    discount,
    items,
    status,
    error,
    is_loading,
  ]);

  useEffect(() => {
    setIsChecked(isChecked);
  }, [isChecked]);

  console.log(isChecked);
  console.log(items);

  function checkHandler() {
    if (isChecked) {
      dispatch(unselectAllProductsCart());
      setIsChecked(!isChecked);
    } else {
      dispatch(selectAllProductsCart());
      setIsChecked(!isChecked);
    }
  }

  function handlePromo(e) {
    e.preventDefault();
    dispatch(addPromocodeCart(values));
  }
  const total = discount_amount ? discount_amount : total_cost;
  return (
    <div className='cart-item'>
      <h2 className='cart-item__title'>Корзина</h2>
      <div className='cart-item__container'>
        <div className='cart-item__card-list'>
          <div className='cart-item__card-info'>
            <div className='cart-item__input-container'>
              <input
                className='cart-item__input'
                type='checkbox'
                id='cart-item-input-all'
                onChange={checkHandler}
                checked={isAllChecked}
              ></input>
              <label htmlFor='cart-item-input-all' className='cart-item__label'>
                Выбрать все
              </label>
              <button
                className='cart-item__delete-button'
                type='submit'
                onClick={() => dispatch(deleteSelectedProductsCart())}
              >
                <img
                  className='cart-item__delete-img'
                  alt='крест'
                  src={Cross}
                ></img>
                <p className='cart-item__delete-text'>Удалить выбранные</p>
              </button>
            </div>
          </div>
          <ul className='cart-card'>
            {items.map((item) => {
              return <CartCard key={item.id} item={item} />;
            })}
          </ul>
        </div>
        <div className='cart-item__order-container'>
          <div className='cart-item__order-price'>
            <div className='cart-item__order-row'>
              <p className='cart-item__price'>Итого:</p>
              <span className='cart-item__sum'>{`${(total).toLocaleString('ru-RU')} ₽`}</span>
              {discount_amount && <span className='cart-item__sum-old'>{`${(total_cost).toLocaleString('ru-RU')} ₽`}</span>}

            </div>
            <p className='cart-item__amount'>{`Бот x ${total_amount}`}</p>
          </div>
          <form className='cart-item__promo-container'>
            <input
              className='cart-item__promo-input'
              id='input-search-promo'
              type='text'
              name='promocode'
              value={values.promocode || ''}
              placeholder='Промокод'
              onChange={handleChange}
              autoComplete='off'
            ></input>
            <button
              className='cart-item__promo-button'
              type='submit'
              onClick={handlePromo}
            ></button>
            <span
              className='input-search-promo-error cart-item__promo-error'
              type='text'
            >
              Некорректный промокод
            </span>
          </form>
          <button type='button' className='cart-item__make-order'>
            К оформлению
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
