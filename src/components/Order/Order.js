/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
import { React, useContext, useState } from 'react';
import './Order.css';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../images/order_chevron.svg';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { getCartData, getUserOrdersData } from '../../store/selectors';
import { postOrder } from '../../store/userOrdersDataSlice';

import { deleteSelectedProductsCart } from '../../store/cartDataSlice';

import PopupWithEmail from './PopupWithEmail/PopupWithEmail';
import OrderBefore from './OrderBefore/OrderBefore';
import OrderAfter from './OrderAfter/OrderAfter';
import OrderList from './OrderList/OrderList';

function Order() {
  const dispatch = useDispatch();
  const currentUser = useContext(CurrentUserContext);
  const [isPaid, setIsPaid] = useState(false);
  const [payMethod, setPayMethod] = useState('card');
  const [isPopupEmailOpen, setIsPopupEmailOpen] = useState(false);
  const [value, setValue] = useState(currentUser.email);

  // // данные для компонентов в заказе
  // const { itemsForOrder } =
  //   useSelector(getCartData);
  const { newOrder } = useSelector(getUserOrdersData);

  const handleClickInput = () => {
    setIsPopupEmailOpen(!isPopupEmailOpen);
  };

  const handleChangeEmail = () => {
    setValue(value);
  };

  // функциональность оплаты
  const handlePay = () => {
    // пост-запрос на создание заказа, передать пей_метод и сенд_ту
    // console.log('pay method final -', payMethod, typeof payMethod);
    dispatch(postOrder({
      pay_method: payMethod,
      send_to: value,
    }));
    setIsPaid(true);
    // dispatch(deleteSelectedProductsCart());
  };

  return (
    <section className='order'>
      <div className='order__header'>
        <Link to="/cart" className='order__text order__text_type_link'>Корзина</Link>
        <img src={icon} alt="Иконка" className='order__chevron' />
        <p className='order__text'>Оформление заказа</p>
      </div>
      <h1 className="order__title">{!isPaid ? 'Оформление заказа' : 'Заказ оплачен'}</h1>
      {!isPaid
        ? <OrderBefore value={value} onClickInput={handleClickInput} onPay={handlePay} payMethod={payMethod} setPayMethod={setPayMethod} />
        : <OrderAfter payMethod={payMethod} value={value} />}
      {/* <OrderList items={itemsForOrder} /> */}
      <PopupWithEmail
        isOpen={isPopupEmailOpen}
        onClose={() => setIsPopupEmailOpen(false)}
        onSubmit={handleChangeEmail}
        value={value}
        setValue={setValue}
      />
    </section>
  );
}

export default Order;
