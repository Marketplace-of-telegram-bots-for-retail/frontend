import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartButton.css';
import IconPlus from '../../../images/ic_plus-24.svg';
import IconMinus from '../../../images/ic_minus-24.svg';
import {
  addProductCart,
  reduceProductCart,
} from '../../../store/dataCartSlice';
import { getCartData } from '../../../store';

const CartButton = ({ parentClass, card }) => {
  const dispatch = useDispatch();
  const { items, is_loading } = useSelector(getCartData);
  const [currentQuantity, setQuantity] = useState(0);
  useEffect(() => {
    if (!card.quantity) {
      const quantity = items?.find((item) => item.id === card.id)?.quantity;
      setQuantity(quantity);
    } else {
      setQuantity(card.quantity);
    }
  }, [items, card, setQuantity]);

  const handleAddProductCart = () => {
    dispatch(addProductCart(card.id));
  };
  const handleReduceProductCart = () => {
    dispatch(reduceProductCart(card.id));
  };

  const cartButtonCounter = (
    <>
      <button
        type='button'
        className={`cart-button__button cart-button__button_counter cart-button__button_counter_${
          parentClass === 'cart' ? 'small' : 'large'
        }`}
        onClick={() => {
          handleReduceProductCart();
        }}
        disabled={currentQuantity === 1 || is_loading}
      >
        <img alt='минус' src={IconMinus} />
      </button>
      <input
        name='count'
        type='number'
        className='cart-button__counter'
        value={currentQuantity}
        disabled
      />
      <button
        type='button'
        className={`cart-button__button cart-button__button_counter cart-button__button_counter_${
          parentClass === 'cart' ? 'small' : 'large'
        }`}
        onClick={() => {
          handleAddProductCart();
        }}
        disabled={is_loading}
      >
        <img alt='плюс' src={IconPlus} />
      </button>
    </>
  );
  const cartButton = (
    <button
      className='cart-button__button'
      type='button'
      onClick={() => {
        handleAddProductCart();
      }}
      disabled={is_loading}
    >
      В корзину
    </button>
  );
  return (
    <div
      className={`${parentClass}__cart-button cart-button ${
        parentClass === 'cart' && 'cart-button_small'
      }`}
    >
      {currentQuantity ? cartButtonCounter : cartButton}
    </div>
  );
};

export default CartButton;
