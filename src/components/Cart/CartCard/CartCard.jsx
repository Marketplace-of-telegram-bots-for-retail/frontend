/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import './CartCard.css';
import LikeButton from '../../buttons/LikeButton/LikeButton';
import CartButton from '../../buttons/CartButton/CartButton';
import LightCross from '../../../images/ic_cross-20.svg';
import {
  selectProductCart,
  deleteProductCart,
} from '../../../store/dataCartSlice';

function CartCard({ item }) {
  const dispatch = useDispatch();

  function handleCheck() {
    dispatch(selectProductCart(item.id));
  }

  return (
    <li className='cart-card__container'>
      <div className='cart-card__input-container'>
        <input
          className='cart-card__input'
          type='checkbox'
          id={item.id}
          onChange={handleCheck}
          checked={item.is_selected}
        ></input>
        <label
          htmlFor={item.id}
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
          <div className="cart-card__price">
            <span className='cart-card__bot-cost'>{`${item.cost.toLocaleString('ru-RU')} ₽`}</span>
            {item.cost !== item.price &&
            <span className='cart-card__bot-price'>{`${item.price.toLocaleString('ru-RU')} ₽/шт.`}</span>}
          </div>
        </div>
        <div className='cart-card__favourite-container'>
          <div className='cart-card__favourite-row'>
            <div className="cart-card__like-button">
              <LikeButton parentClass='product' card={item} />
            </div>
            <div className='cart-card__favourite-break'></div>
            <button className='cart-card__delete-button' type='submit' onClick={() => dispatch(deleteProductCart(item.id))}>
              <img className='cart-card__delete-image' alt='крест' src={LightCross}></img>
              <p className='cart-card__delete-text'>Удалить</p>
            </button>
          </div>
          <div className='cart-card__amount'>
            <CartButton parentClass='cart' card={item} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartCard;