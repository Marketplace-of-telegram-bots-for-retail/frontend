/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './CartCard.css';
import Image from '../../../images/Picture.jpg';
import Heart from '../../../images/ic_heart-20.svg';
import LightCross from '../../../images/ic_cross-20.svg';
import Minus from '../../../images/ic_minus-24-white.svg';
import Plus from '../../../images/ic_plus-24-white.svg';

function CartCard() {
  return (
    <div className='cart-card'>
      <div className='cart-card__container'>
        <div className='cart-card__input-container'>
          <input
            className='categories__input cart-card__input'
            type='checkbox'
            id='cart-card-input'
          ></input>
          <label
            htmlFor='cart-card-input'
            className='categories__label cart-card__label'
            style={{
              fontSize: '1rem',
              marginRight: '0',
              gridArea: 'A',
              alignContent: 'center',
            }}
          ></label>
        </div>
        <img className='cart-card__image' alt='картинка' src={Image} />
        <div className='cart-card__info'>
          <div className='cart-card__info-container'>
            <div className='cart-card__text-container'>
              <p className='cart-card__text-title'>
                Название бота, которое может занимать 2 строки Название бота,
                которое может
              </p>
              <p className='cart-card__text-articl'>Артикул: 000001</p>
              <p className='cart-card__text-description'>
                Описание бота, которое может занимать 3 строки. Описание бота,
                которое может занимать 3 строки.
              </p>
            </div>
            <div className='cart-card__bot-price'>1000 ₽</div>
          </div>
          <div className='cart-card__favourite-container'>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <img
                className='cart-card__favourite-heart'
                src={Heart}
                alt='сердечко'
              />
              <p className='cart-card__favourite-heart-text'>В избранное</p>
              <div className='cart-card__favourite-break'></div>
              <img
                className='cart-card__favourite-cross'
                alt='крест'
                src={LightCross}
              />
              <p className='cart-card__favourite-heart-text'>Удалить</p>
              <div className='cart-card__bot-number-container'>
                <button type='button' className='cart-card__button'>
                  <img
                    className='cart-card__button-symbol'
                    src={Minus}
                    alt='минус'
                  />
                </button>
                <p className='cart-card__bot-number'>1</p>
                <button type='button' className='cart-card__button'>
                  <img
                    className='cart-card__button-symbol'
                    src={Plus}
                    alt='плюс'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cart-card__line'></div>
    </div>
  );
}

export default CartCard;