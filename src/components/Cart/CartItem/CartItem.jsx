/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './CartItem.css';
import Cross from '../../../images/ic_cross-24.svg';
import Plus from '../../../images/ic_plus-24-white.svg';
import CartCard from '../CartCard/CartCard';

function CartItem() {
  return (
    <div className='cart-item'>
      <h2 className='cart-item__title'>Корзина</h2>
      <div className='cart-item__container'>
        <div className='cart-item__card-list'>
          <div className='cart-item__card-info'>
            <div className='cart-item__input-container'>
              <input
                className='categories__input cart-item__input'
                type='checkbox'
                id='cart-item-input-all'
              ></input>
              <label
                htmlFor='cart-item-input-all'
                className='categories__label cart-item__label'
                style={{ fontSize: '1rem' }}
              >
                Выбрать все
              </label>
              <img className='cart-item__delete-img' alt='крест' src={Cross}></img>
              <p className='cart-item__delete-text'>Удалить выбранные</p>
            </div>
          </div>
          <CartCard />
        </div>
        <div className='cart-item__order-container'>
          <div className='cart-item__order-price'>
            <p className='cart-item__price'>
              Итого:
              <span className='cart-item__sum'>1000 ₽</span>
            </p>
            <p className='cart-item__amount'>Бот x 1</p>
          </div>
          <div
            className='cart-item__order-promo-container'
            style={{ position: 'relative' }}
          >
            <input
              id='input-search-promo'
              type='search'
              placeholder='Промокод'
              className='cart-item__input'
            ></input>
            <button type='button' className='cart-item__input-button'>
              <img src={Plus} className='cart-item__input-plus' alt='плюс' />
            </button>
            <span className='input-search-promo-error cart-item__promo-error' type='text'>Некорректный промокод</span>
          </div>
          <button type='button' className='cart-item__make-order'>
            К оформлению
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
