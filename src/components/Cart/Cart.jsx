/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import CartEmpty from './CartEmpty/CartEmpty';
import { getCartData } from '../../store';

function Cart() {
  const { items } = useSelector(getCartData);

  return (
    <section className='content__cart cart'>
      {items.length !== 0 ? <CartItem /> : <CartEmpty />}
    </section>
  );
}

export default Cart;
