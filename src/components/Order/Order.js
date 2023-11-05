/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
import { React, useContext, useState } from 'react';
import './Order.css';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../images/order_chevron.svg';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { getCartData, getUserOrdersData } from '../../store/selectors';

import PopupWithEmail from './PopupWithEmail/PopupWithEmail';
import getChangedData from '../../utils/getChangedData';
import OrderBefore from './OrderBefore/OrderBefore';
import OrderAfter from './OrderAfter/OrderAfter';
import OrderList from './OrderList/OrderList';

// общий компонент заказа
// данные: айди заказа через useParams, данные из корзины при нажатии "к оформлению" - массив itemsForOrder

function Order({ cbUpdateEmail }) {
  // НЕНУЖНЫЕ данные, если заказ создаётся при нажатии на оплату
  // айди самого заказа
  // const { id } = useParams();
  // данные о самом заказе
  // const { getOrder } = useSelector(getUserOrdersData);
  // загружаем данные заказа
  // useEffect(() => {
  //   dispatch(getOrder(id));
  // }, [id]);

  const dispatch = useDispatch();
  const currentUser = useContext(CurrentUserContext);
  const [isPaid, setIsPaid] = useState(false);
  const [isPopupEmailOpen, setIsPopupEmailOpen] = useState(false);
  const [value, setValue] = useState(currentUser.email);

  // данные для компонентов в заказе
  const { itemsForOrder } =
    useSelector(getCartData);

  const handleClickInput = () => {
    setIsPopupEmailOpen(!isPopupEmailOpen);
  };

  const handleChangeEmail = () => {
    const data = {
      email: value,
    };
    cbUpdateEmail(getChangedData(currentUser, data));
  };

  // функциональность оплаты
  const handlePay = () => {
    setIsPaid(true);
    // пост-запрос на создание заказа, передать пей_метод и сенд_ту
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
      <OrderList items={itemsForOrder} />
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
