/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Cart.css';
// import CartItem from './CartItem/CartItem';
import CartEmpty from './CartEmpty/CartEmpty';

function Cart() {
  return (
    <section className='cart'>
      <CartEmpty />
    </section>
  );
}

export default Cart;
