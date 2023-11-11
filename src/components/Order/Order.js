/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
import { React, useContext, useEffect, useState } from 'react';
import './Order.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../images/order_chevron.svg';
import PopupWithEmail from './PopupWithEmail/PopupWithEmail';
import OrderBefore from './OrderBefore/OrderBefore';
import OrderAfter from './OrderAfter/OrderAfter';
import {
  getCartData,
  getUserData,
  getUserOrdersData,
} from '../../store/selectors';
import {
  getCart,
  placeAndPayOrder,
  setCurrentOrder,
} from '../../store/actions';

function Order() {
  const dispatch = useDispatch();
  const { currentOrder } = useSelector(getUserOrdersData);
  const { itemsForOrder } = useSelector(getCartData);
  const { user } = useSelector(getUserData);

  const [payMethod, setPayMethod] = useState('card');
  const [isPopupEmailOpen, setIsPopupEmailOpen] = useState(false);
  const [value, setValue] = useState(user.email);
  // // данные для компонентов в заказе
  const { is_paid } = currentOrder;
  const handleClickInput = () => {
    setIsPopupEmailOpen(!isPopupEmailOpen);
  };
  const handleChangeEmail = () => {
    setValue(value);
  };
  const navigate = useNavigate();
  // функциональность оплаты
  const handlePay = async () => {
    // пост-запрос на создание заказа, передать пей_метод и сенд_ту
    // console.log('pay method final -', payMethod, typeof payMethod);
    await dispatch(
      placeAndPayOrder({
        pay_method: payMethod,
        send_to: value,
      })
    );
    currentOrder && dispatch(getCart());
  };
  useEffect(() => {
    dispatch(setCurrentOrder({}));
    itemsForOrder.length === 0 && navigate('/cart');
  }, []);
  return (
    <section className='order'>
      <div className='order__header'>
        <Link to='/cart' className='order__text order__text_type_link'>
          Корзина
        </Link>
        <img src={icon} alt='Иконка' className='order__chevron' />
        <p className='order__text'>Оформление заказа</p>
      </div>
      <h1 className='order__title'>
        {!is_paid ? 'Оформление заказа' : 'Заказ оплачен'}
      </h1>
      {!is_paid ? (
        <OrderBefore
          value={value}
          onClickInput={handleClickInput}
          onPay={handlePay}
          payMethod={payMethod}
          setPayMethod={setPayMethod}
        />
      ) : (
        <OrderAfter payMethod={payMethod} value={value} />
      )}
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
