/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Basket.css';
import Cross from '../../images/ic_cross-24.svg';
import Image from '../../images/Picture.jpg';
import Heart from '../../images/ic_heart-20.svg';
import LightCross from '../../images/ic_cross-20.svg';
import Minus from '../../images/ic_minus-24-white.svg';
import Plus from '../../images/ic_plus-24-white.svg';

function Basket() {
  return (
    <section className='basket'>
      <h2 className='basket__title'>Корзина</h2>
      <div className='basket__container'>
        <div className='basket__card-info'>
          <div className='basket__input-container'>
            <input
              className='categories__input basket__input'
              type='checkbox'
              id='basket-input-all'
            ></input>
            <label
              htmlFor='basket-input-all'
              className='categories__label basket__label'
              style={{ fontSize: '1rem' }}
            >
              Выбрать все
            </label>
            <img className='basket__delete-img' alt='крест' src={Cross}></img>
            <p className='basket__delete-text'>Удалить выбранное</p>
          </div>
          <div className='basket__card-container'>
            <input
              className='categories__input basket__input'
              type='checkbox'
              id='basket-input'
            ></input>
            <label
              htmlFor='basket-input'
              className='categories__label basket__label'
              style={{
                fontSize: '1rem',
                marginRight: '0',
                gridArea: 'A',
                alignContent: 'center',
              }}
            ></label>
            <img className='basket__card-image' alt='картинка' src={Image} />
            <div className='basket__text-container'>
              <p className='basket__text-title'>
                Название бота, которое может занимать 2 строки Название бота,
                которое может
              </p>
              <p className='basket__text-articl'>Артикул: 000001</p>
              <p className='basket__text-description'>
                Описание бота, которое может занимать 3 строки. Описание бота,
                которое может занимать 3 строки.
              </p>
            </div>
            <div className='basket__favourite-container'>
              <div style={{ marginTop: '1rem', display: 'flex' }}>
                <img
                  className='basket__favourite-heart'
                  src={Heart}
                  alt='сердечко'
                />
                <p className='basket__favourite-heart-text'>В избранное</p>
                <div className='basket__favourite-break' />
                <img
                  className='basket__favourite-cross'
                  alt='крест'
                  src={LightCross}
                />
                <p className='basket__favourite-heart-text'>Удалить</p>
              </div>
              <div className='basket__bot-number-container'>
                <button type='button' className='basket__button'>
                  <img
                    className='basket__button-symbol'
                    src={Minus}
                    alt='минус'
                  />
                </button>
                <p className='basket__bot-number'>1</p>
                <button type='button' className='basket__button'>
                  <img
                    className='basket__button-symbol'
                    src={Plus}
                    alt='минус'
                  />
                </button>
              </div>
            </div>
            <div className='basket__bot-price'>1000 ₽</div>
          </div>
          <div className='basket__line'></div>
        </div>
        <div className='basket__order-container'>
          <div className='basket__order-price'>
            <p className='basket__price'>
              Итого:
              <span className='basket__sum'>1000 ₽</span>
            </p>
            <p className='basket__amount'>Бот x 1</p>
          </div>
          <div
            className='basket__order-search-container'
            style={{ position: 'relative' }}
          >
            <input
              type='search'
              placeholder='Промокод'
              className='basket__input'
            ></input>
            <button type='button' className='basket__input-button'>
              <img src={Plus} className='basket__input-plus' alt='плюс' />
            </button>
          </div>
          <button type='button' className='basket__make-order'>
            К оформлению
          </button>
        </div>
      </div>
    </section>
  );
}

export default Basket;
