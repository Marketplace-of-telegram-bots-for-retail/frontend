/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { getUserOrdersData } from '../../../store/selectors';
import { convertToLocaleStringRub } from '../../../utils/convertToLocaleStringRub';

const OrderAfter = ({ payMethod, value }) => {
  const { currentOrder } = useSelector(getUserOrdersData);
  return (
    <div className='order__after-block'>
      <ul className='order__after-info'>
        <li className='order__after-part'>
          <p className='order__after-title'>Номер заказа:</p>
          <p className='order__after-text'>{currentOrder?.number_order}</p>
        </li>
        <li className='order__after-part'>
          <p className='order__after-title'>Способ оплаты:</p>
          <p className='order__after-text'>
            {payMethod === 'card' ? 'карта' : 'СБП'}
          </p>
        </li>
        <li className='order__after-part'>
          <p className='order__after-title'>Получатель:</p>
          <p className='order__after-text'>{value}</p>
        </li>
        <li className='order__after-part'>
          <p className='order__after-title'>Оплачено:</p>
          <p className='order__after-text'>
            {convertToLocaleStringRub(currentOrder?.total_cost)}
          </p>
        </li>
      </ul>
      <button type='button' className='order__check-btn'>
        Электронный чек
      </button>
    </div>
  );
};

export default OrderAfter;
