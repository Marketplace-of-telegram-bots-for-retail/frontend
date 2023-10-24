/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import CartEmpty from './CartEmpty/CartEmpty';
// import CartTemp from './CartTemp';

function Cart() {
  // const dispatch = useDispatch();
  const {
    items
  } = useSelector((state) => state.dataCart);
  console.log(items);
  console.log(items.length);
  return (
    <section className='cart'>
      {items.length !== 0 ? (
        <CartItem />
      ) : (
        <CartEmpty />
      )}
    </section>
  );
}

export default Cart;
