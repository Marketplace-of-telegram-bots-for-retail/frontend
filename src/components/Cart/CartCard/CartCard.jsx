/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './CartCard.css';
import LikeButton from '../../buttons/LikeButton/LikeButton';
import CartButton from '../../buttons/CartButton/CartButton';
import LightCross from '../../../images/ic_cross-20.svg';

function CartCard({ item }) {
  return (
    <div className='cart-card'>
      <div className='cart-card__container'>
        <div className='cart-card__input-container'>
          <input
            className='cart-card__input'
            type='checkbox'
            id='cart-card-input'
          ></input>
          <label
            htmlFor='cart-card-input'
            className='cart-card__label'
          ></label>
        </div>
        <img className='cart-card__image' alt='картинка' src={item.image_1} />
        <div className='cart-card__info'>
          <div className='cart-card__info-container'>
            <div className='cart-card__text-container'>
              <p className='cart-card__text-title'>{item.name}</p>
              <p className='cart-card__text-articl'>{`Артикул: ${item.article}`}</p>
              <p className='cart-card__text-description'>{item.description}</p>
            </div>
            <div className='cart-card__bot-price'>{`${item.price} ₽`}</div>
          </div>
          <div className='cart-card__favourite-container'>
            <div className='cart-card__favourite-row'>
              <LikeButton parentClass='product' card={item} />
              <div className='cart-card__favourite-break'></div>
              <button className='cart-card__delete-button' type='submit'>
                <img className='cart-card__delete-image' alt='крест' src={LightCross}></img>
                <p className='cart-card__delete-text'>Удалить</p>
              </button>
            </div>
            <div className='cart-card__amount'>
              <CartButton parentClass='card' card={item} />
            </div>
          </div>
        </div>
      </div>
      <div className='cart-card__line'></div>
    </div>
  );
}

export default CartCard;