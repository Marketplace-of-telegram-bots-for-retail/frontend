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
import PreviewImage from '../../PreviewImage/PreviewImage';
import { convertToLocaleStringRub } from '../../../utils/convertToLocaleStringRub';

function CartCard({ item }) {
  const dispatch = useDispatch();

  function handleCheck() {
    dispatch(selectProductCart(item.id));
  }
  const cartPrice = `${convertToLocaleStringRub(item.price)}/шт.`;
  const cartCost = convertToLocaleStringRub(item.cost);

  return (
    <li className='cart__container'>
      <div className='cart__input-container'>
        <input
          className='cart__input'
          type='checkbox'
          id={item.id}
          onChange={handleCheck}
          checked={item.is_selected}
        ></input>
        <label htmlFor={item.id} className='cart__label'></label>
      </div>

      <PreviewImage card={item} parentClass='cart' />
      <div className='cart__info'>
        <div className='cart__info-container'>
          <div className='cart__text-container'>
            <p className='cart__text-title'>{item.name}</p>
            <p className='cart__text-articl'>{`Артикул: ${item.article}`}</p>
            <p className='cart__text-description'>{item.description}</p>
          </div>
          <div className='cart__price'>
            <span className='cart__bot-cost'>{cartCost}</span>
            {item.cost !== item.price && (
              <span className='cart__bot-price'>{cartPrice}</span>
            )}
          </div>
        </div>
        <div className='cart__favourite-container'>
          <div className='cart__favourite-row'>
            <div className='cart__like-button'>
              <LikeButton parentClass='product' card={item} />
            </div>
            <div className='cart__favourite-break'></div>
            <button
              className='cart__delete-button'
              type='submit'
              onClick={() => dispatch(deleteProductCart(item.id))}
            >
              <img
                className='cart__delete-image'
                alt='крест'
                src={LightCross}
              ></img>
              <p className='cart__delete-text'>Удалить</p>
            </button>
          </div>
          <div className='cart__amount'>
            <CartButton parentClass='cart' card={item} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartCard;
