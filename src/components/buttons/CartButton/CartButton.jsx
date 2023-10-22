import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartButton.css';
import IconPlus from '../../../images/ic_plus-24.svg';
import IconMinus from '../../../images/ic_minus-24.svg';
import {
  addProductCart,
  reduceProductCart,
} from '../../../store/dataCartSlice';

const CartButton = ({ parentClass, card }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.dataCart);
  const [isProductInTheCart, setProductInTheCart] = useState(0);
  const limets = { min: 1, max: 100 };
  const handleClickCartButton = (increment) => {
    console.log(items);
    return increment
      ? setProductInTheCart((state) => (state < limets.max ? state + 1 : state))
      : setProductInTheCart((state) => (state > limets.min ? state - 1 : state));
  };

  const handleAddProductCart = () => {
    dispatch(addProductCart(card.id));
  };
  const handleReduceProductCart = () => {
    dispatch(reduceProductCart(card.id));
  };
  const handleChange = (e) => {
    const value = Math.max(
      limets.min,
      Math.min(limets.max, Number(e.target.value))
    );
    e.preventDefault();
    setProductInTheCart(value);
  };

  const cartButtonCounter = (
    <>
      <button
        type='button'
        className={`cart-button__button cart-button__button_counter cart-button__button_counter_${
          parentClass === 'cart' ? 'small' : 'large'
        }`}
        onClick={() => {
          handleClickCartButton(false);
          handleReduceProductCart();
        }}
        disabled={isProductInTheCart === 1}
      >
        <img alt='минус' src={IconMinus} />
      </button>
      <input
        name='count'
        type='number'
        className='cart-button__counter'
        value={isProductInTheCart}
        disabled
        onChange={handleChange}
      />
      <button
        type='button'
        className={`cart-button__button cart-button__button_counter cart-button__button_counter_${
          parentClass === 'cart' ? 'small' : 'large'
        }`}
        onClick={() => {
          handleClickCartButton(true);
          handleAddProductCart();
        }}
      >
        <img alt='плюс' src={IconPlus} />
      </button>
    </>
    // </form>
  );
  const cartButton = (
    <button
      className='cart-button__button'
      type='submit'
      onClick={() => {
        handleClickCartButton(true);
        handleAddProductCart();
      }}
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
      {isProductInTheCart ? cartButtonCounter : cartButton}
    </div>
  );
};

export default CartButton;
