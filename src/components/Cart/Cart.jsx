/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Cart.css';
// import CartItem from './CartItem/CartItem';
import CartEmpty from './CartEmpty/CartEmpty';
import CartTemp from './CartTemp';

function Cart() {
  return (
    <section className='cart'>
      {/* <CartTemp /> */}
      <CartEmpty />
    </section>
  );
}

export default Cart;
