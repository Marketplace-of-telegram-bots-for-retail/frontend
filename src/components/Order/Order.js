/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
import { React, useContext, useState } from 'react';
import './Order.css';
import { Link } from 'react-router-dom';
import icon from '../../images/order_chevron.svg';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import PopupWithEmail from './PopupWithEmail/PopupWithEmail';
import getChangedData from '../../utils/getChangedData';
import OrderBefore from './OrderBefore/OrderBefore';
import OrderAfter from './OrderAfter/OrderAfter';
import OrderList from './OrderList/OrderList';

// после оплаты заказ отправляется в лк "мои заказы", он ещё в разработке!! тут просто меняем вёрстку пока

function Order({ cbUpdateEmail }) {
  const currentUser = useContext(CurrentUserContext);
  const [isPaid, setIsPaid] = useState(false);
  const [isPopupEmailOpen, setIsPopupEmailOpen] = useState(false);
  const [value, setValue] = useState(currentUser.email);

  const handleClickInput = () => {
    setIsPopupEmailOpen(!isPopupEmailOpen);
  };

  const handleChangeEmail = () => {
    const data = {
      email: value,
    };
    cbUpdateEmail(getChangedData(currentUser, data));
  };

  const handlePay = () => {
    setIsPaid(true);
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
        ? <OrderBefore onClickInput={handleClickInput} onPay={handlePay} />
        : <OrderAfter />}
      <OrderList />
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
