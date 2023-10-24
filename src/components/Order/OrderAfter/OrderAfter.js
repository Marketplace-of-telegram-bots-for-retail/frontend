import { React, useContext } from 'react';
import { CurrentUserContext } from '../../../contexts/currentUserContext';

const OrderAfter = () => {
  const currentUser = useContext(CurrentUserContext);
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
          <p className="order__after-text">2500 ₽</p>
        </li>
      </ul>
      <button type="button" className="order__check-btn">Электронный чек</button>
    </div>
  );
};

export default OrderAfter;