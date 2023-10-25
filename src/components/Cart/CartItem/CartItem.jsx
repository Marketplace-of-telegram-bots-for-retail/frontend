/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
import './CartItem.css';
import Cross from '../../../images/ic_cross-24.svg';
// import Plus from '../../../images/ic_plus-24-white.svg';
import CartCard from '../CartCard/CartCard';
/*
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
} from '../../../store/dataCartSlice';
*/

function CartItem() {
  // const dispatch = useDispatch();
  const {
    items
  } = useSelector((state) => state.dataCart);

  console.log(items);
  /*
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
  */

  return (
    <div className='cart-item'>
      <h2 className='cart-item__title'>Корзина</h2>
      <div className='cart-item__container'>
        <div className='cart-item__card-list'>
          <div className='cart-item__card-info'>
            <div className='cart-item__input-container'>
              <input
                className='cart-item__input'
                type='checkbox'
                id='cart-item-input-all'
              ></input>
              <label
                htmlFor='cart-item-input-all'
                className='cart-item__label'
              >
                Выбрать все
              </label>
              <button className='cart-item__delete-button' type='submit'>
                <img className='cart-item__delete-img' alt='крест' src={Cross}></img>
                <p className='cart-item__delete-text'>Удалить выбранные</p>
              </button>
            </div>
          </div>
          {items.map((item) => {
            return (
              <CartCard key={item.id} item={item} />
            );
          })}
        </div>
        <div className='cart-item__order-container'>
          <div className='cart-item__order-price'>
            <div className="cart-item__order-row">
              <p className='cart-item__price'>Итого:</p>
              <span className='cart-item__sum'>1000 ₽</span>
            </div>
            <p className='cart-item__amount'>Бот x 1</p>
          </div>
          <form className='cart-item__promo-container'>
            <input
              className='cart-item__promo-input'
              id='input-search-promo'
              type='text'
              name='promo'
              value=''
              placeholder='Промокод'
            ></input>
            <button className='cart-item__promo-button' type='submit'></button>
            <span className='input-search-promo-error cart-item__promo-error' type='text'>Некорректный промокод</span>
          </form>
          <button type='button' className='cart-item__make-order'>
            К оформлению
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
