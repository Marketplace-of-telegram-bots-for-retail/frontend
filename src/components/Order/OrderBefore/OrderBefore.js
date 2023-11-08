/* eslint-disable no-unused-vars */
import { React, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentUserContext } from '../../../contexts/currentUserContext';
import { getCartData } from '../../../store/selectors';
import subicon from '../../../images/order__subicon.svg';
import iconblue from '../../../images/order_chevron_blue.svg';
import btn_card from '../../../images/order_btn1.svg';
import btn_sbp from '../../../images/order_btn2.svg';

import OrderList from '../OrderList/OrderList';

// компонент неоплаченного заказа

const OrderBefore = ({
  value,
  onClickInput,
  onPay,
  payMethod,
  setPayMethod,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [isCard, setIsCard] = useState(true);

  const dispatch = useDispatch();

  // данные для компонентов в заказе
  const { itemsForOrder } =
    useSelector(getCartData);

  // данные для компонентов в заказе
  const { total_cost, total_amount, discount_amount } =
    useSelector(getCartData);

  const total = discount_amount || total_cost;

  // иконка карты
  const handleCard = () => {
    setIsCard(true);
    setPayMethod('card');
  };
  // иконка сбп
  const handleSbp = () => {
    setIsCard(false);
    setPayMethod('sbp');
  };

  return (
    <>
      <div className='order__main-block'>
        <div className='order__block order__block_type_customer'>
          <h2 className='order__heading'>Данные получателя</h2>
          <div className='order__content'>
            <p className='order__text order__text_type_email'>Почта</p>
            <button
              type='button'
              className='order__email-button'
              onClick={onClickInput}
            >
              {value}
              <img className='order__icon-btn' src={iconblue} alt='Иконка' />
            </button>
            <div className='order__quote'>
              <img
                className='order__info-icon'
                src={subicon}
                alt='Значок информации'
              />
              <p className='order__subtext'>
                На эту почту придет ссылка для скачивания скрипта бота и
                инструкция по установке
              </p>
            </div>
          </div>
        </div>
        <div className='order__block order__block_type_payment'>
          <h2 className='order__heading'>Способ оплаты</h2>
          <div className='order__buttons'>
            <button
              type='button'
              className={`order__payment-btn ${
                isCard && 'order__payment-btn_type_active'
              }`}
              onClick={() => handleCard()}
            >
              <img src={btn_card} alt='Иконка оплаты картой' />
              Картой
            </button>
            <button
              type='button'
              className={`order__payment-btn ${
                !isCard && 'order__payment-btn_type_active'
              }`}
              onClick={() => handleSbp()}
            >
              <img
                src={btn_sbp}
                alt='Иконка оплатой системой быстрых платежей'
              />
              СБП
            </button>
          </div>
        </div>
        <div className='order__block order__block_type_final'>
          <div className='order__final'>
            <div className='order__text-block'>
              <p className='order__final-text'>Итого:</p>
              <p className='order__summ'>
                {`${total.toLocaleString('ru-RU')} ₽`}
              </p>
            </div>
            <p className='order__amount-text'>{`Бот x ${total_amount}`}</p>
          </div>
          <button type='button' className='order__final-btn' onClick={onPay}>
            Оплатить
          </button>
        </div>
      </div>
      <OrderList items={itemsForOrder} />
    </>
  );
};

export default OrderBefore;
