/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCart,
  addProductCart,
  deleteProductCart,
  reduceProductCart,
  selectProductCart,
  selectAllProductsCart,
  unselectAllProductsCart,
  deleteSelectedProductsCart,
  addPromocodeCart,
} from '../../store/dataCartSlice';
import CartCard from './CartCard/CartCard';

const CartTemp = () => {
  const dispatch = useDispatch();
  const {
    cart_id,
    total_cost,
    total_amount,
    discount_sum,
    items,
    status,
    error,
    is_loading,
  } = useSelector((state) => state.dataCart);

  useEffect(() => {
    console.log(
      cart_id,
      total_cost,
      total_amount,
      discount_sum,
      items,
      status,
      error,
      is_loading
    );
  }, [
    cart_id,
    total_cost,
    total_amount,
    discount_sum,
    items,
    status,
    error,
    is_loading,
  ]);
  const idList = [
    { id: 108 },
    { id: 109 },
    { id: 110 },
    { id: 150 },
    { id: 160 },
    { id: 170 },
  ];
  // const PROMOCODE = {
  //   STUDENT_10: 10,
  //   SCHOOL_20: 20,
  //   BIRTHDAY_30: 30,
  // };

  const promo = {
    promocode: 'SCHOOL_20',
  };

  return (
    <div>
      <div>
        <button type='button' onClick={() => dispatch(getCart())}>
          загрузить корзину
        </button>
        <button
          type='button'
          onClick={() => dispatch(addProductCart(idList[1].id))}
        >
          добавить товар
        </button>
        <button
          type='button'
          onClick={() => dispatch(deleteProductCart(idList[1].id))}
        >
          удалить товар
        </button>
        <button
          type='button'
          onClick={() => dispatch(reduceProductCart(idList[1].id))}
        >
          уменьшить товар
        </button>
        <lebel>
          <input
            type='checkbox'
            onClick={() => dispatch(selectProductCart(idList[1].id))}
          />
          выбрать товар
        </lebel>
        <button type='button' onClick={() => dispatch(selectAllProductsCart())}>
          выбрать все товары
        </button>
        <button
          type='button'
          onClick={() => dispatch(unselectAllProductsCart())}
        >
          снять выделение со всех
        </button>
        <button
          type='button'
          onClick={() => dispatch(deleteSelectedProductsCart())}
        >
          Удалить все выбраные товары
        </button>
        <button type='button' onClick={() => dispatch(addPromocodeCart(promo))}>
          Ввести промокод
        </button>
      </div>
      <div>
        <h2>Id Корзины: {cart_id}</h2>
        <h2>Стоимость: {total_cost}</h2>
        <h2>Количество товаров: {total_amount}</h2>
        {discount_sum && <h2>Стоимость: {discount_sum}</h2>}
      </div>
      {items.map((item) => {
        return (
          <CartCard key={item.id} item={item} />
        );
      })}
    </div>
  );
};

export default CartTemp;
