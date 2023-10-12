import React, { useEffect, useState } from 'react';
import './CartButton.css';
import IconPlus from '../../../images/ic_plus-24.svg';
import IconMinus from '../../../images/ic_minus-24.svg';

export const CartButton = ({ parentClass }) => {
  const [isProductInTheCart, setProductInTheCart] = useState(0);
  const limets = { min: 0, max: 100 };
  const handleClickCartButton = (increment) => {
    return increment
      ? setProductInTheCart((state) => (state < limets.max ? state + 1 : state))
      : setProductInTheCart((state) => state - 1);
  };

  const handleChange = (e) => {
    const value = Math.max(
      limets.min,
      Math.min(limets.max, Number(e.target.value))
    );
    e.preventDefault();
    setProductInTheCart(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isProductInTheCart);
  };

  useEffect(() => {
    isProductInTheCart
      ? console.log('Отправить данные в корзину', isProductInTheCart)
      : console.log('Удалить из корзины');
  }, [isProductInTheCart]);

  const cartButtonCounter = (
    // <form action='' className='cart-button__wrapper' onSubmit={handleSubmit}>
    <>
      <button
        type='button'
        className='cart-button__button cart-button__button_counter'
        onClick={() => {
          handleClickCartButton(false);
        }}
      >
        <img alt='' src={IconMinus} />
      </button>
      <input
        name='count'
        type='number'
        className='cart-button__counter'
        value={isProductInTheCart}
        onChange={handleChange}
      />
      <button
        type='button'
        className='cart-button__button cart-button__button_counter'
        onClick={() => {
          handleClickCartButton(true);
        }}
      >
        <img alt='' src={IconPlus} />
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
      }}
    >
      В корзину
    </button>
  );
  return (
    <div
      className={`${parentClass}__cart-button cart-button`}
      onSubmit={handleSubmit}
    >
      {isProductInTheCart ? cartButtonCounter : cartButton}
    </div>
  );
};
