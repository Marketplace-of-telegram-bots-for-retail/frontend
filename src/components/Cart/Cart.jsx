/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Cart.css';
import Cross from '../../images/ic_cross-24.svg';
import Image from '../../images/Picture.jpg';
import Heart from '../../images/ic_heart-20.svg';
import LightCross from '../../images/ic_cross-20.svg';
import Minus from '../../images/ic_minus-24-white.svg';
import Plus from '../../images/ic_plus-24-white.svg';

function Cart() {
  return (
    <section className='cart'>
      <h2 className='cart__title'>Корзина</h2>
      <div className='cart__container'>
        <div className='cart__card-info'>
          <div className='cart__input-container'>
            <input
              className='categories__input cart__input'
              type='checkbox'
              id='cart-input-all'
            ></input>
            <label
              htmlFor='cart-input-all'
              className='categories__label cart__label'
              style={{ fontSize: '1rem' }}
            >
              Выбрать все
            </label>
            <img className='cart__delete-img' alt='крест' src={Cross}></img>
            <p className='cart__delete-text'>Удалить выбранное</p>
          </div>
          <div className='cart__card-container'>
            <input
              className='categories__input cart__input'
              type='checkbox'
              id='cart-input'
            ></input>
            <label
              htmlFor='cart-input'
              className='categories__label cart__label'
              style={{
                fontSize: '1rem',
                marginRight: '0',
                gridArea: 'A',
                alignContent: 'center',
              }}
            ></label>
            <img className='cart__card-image' alt='картинка' src={Image} />
            <div className='cart__text-container'>
              <p className='cart__text-title'>
                Название бота, которое может занимать 2 строки Название бота,
                которое может
              </p>
              <p className='cart__text-articl'>Артикул: 000001</p>
              <p className='cart__text-description'>
                Описание бота, которое может занимать 3 строки. Описание бота,
                которое может занимать 3 строки.
              </p>
            </div>
            <div className='cart__favourite-container'>
              <div style={{ marginTop: '1rem', display: 'flex' }}>
                <img
                  className='cart__favourite-heart'
                  src={Heart}
                  alt='сердечко'
                />
                <p className='cart__favourite-heart-text'>В избранное</p>
                <div className='cart__favourite-break' />
                <img
                  className='cart__favourite-cross'
                  alt='крест'
                  src={LightCross}
                />
                <p className='cart__favourite-heart-text'>Удалить</p>
              </div>
              <div className='cart__bot-number-container'>
                <button type='button' className='cart__button'>
                  <img
                    className='cart__button-symbol'
                    src={Minus}
                    alt='минус'
                  />
                </button>
                <p className='cart__bot-number'>1</p>
                <button type='button' className='cart__button'>
                  <img className='cart__button-symbol' src={Plus} alt='минус' />
                </button>
              </div>
            </div>
            <div className='cart__bot-price'>1000 ₽</div>
          </div>
          <div className='cart__line'></div>
        </div>
        <div className='cart__order-container'>
          <div className='cart__order-price'>
            <p className='cart__price'>
              Итого:
              <span className='cart__sum'>1000 ₽</span>
            </p>
            <p className='cart__amount'>Бот x 1</p>
          </div>
          <div
            className='cart__order-search-container'
            style={{ position: 'relative' }}
          >
            <input
              type='search'
              placeholder='Промокод'
              className='cart__input'
            ></input>
            <button type='button' className='cart__input-button'>
              <img src={Plus} className='cart__input-plus' alt='плюс' />
            </button>
          </div>
          <button type='button' className='cart__make-order'>
            К оформлению
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
