/* eslint-disable no-unused-vars */
import { React, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentUserContext } from '../../../contexts/currentUserContext';

const OrderAfter = () => {
  const currentUser = useContext(CurrentUserContext);
  const dispatch = useDispatch();
  const { total_cost, discount_amount } =
    useSelector((state) => state.dataCart);
  const total = discount_amount || total_cost;

  return (
    <div className="order__after-block">
      <ul className="order__after-info">
        <li className="order__after-part">
          <p className="order__after-title">Номер заказа:</p>
          <p className="order__after-text">№ 000001810 – 01</p>
        </li>
        <li className="order__after-part">
          <p className="order__after-title">Способ оплаты:</p>
          <p className="order__after-text">карта *1234</p>
        </li>
        <li className="order__after-part">
          <p className="order__after-title">Получатель:</p>
          <p className="order__after-text">{currentUser.email}</p>
        </li>
        <li className="order__after-part">
          <p className="order__after-title">Оплачено:</p>
          <p className="order__after-text">{`${total.toLocaleString('ru-RU')} ₽`}</p>
        </li>
      </ul>
      <button type="button" className="order__check-btn">Электронный чек</button>
    </div>
  );
};

export default OrderAfter;