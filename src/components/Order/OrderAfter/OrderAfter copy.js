/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, getUserOrdersData } from '../../../store/selectors';
import { getOrder } from '../../../store/userOrdersDataSlice';

import OrderList from '../OrderList/OrderList';
import { convertToLocaleStringRub } from '../../../utils/convertToLocaleStringRub';

const OrderAfter = ({ payMethod, value }) => {
  const dispatch = useDispatch();
  const { total_cost, discount_amount } = useSelector(getCartData);
  const total = discount_amount || total_cost;

  // const tt = total === 'undefined' ? `0` : `${total.toLocaleString('ru-RU')} ₽`;

  // итемсФорОрдер тут нужно будет доставать из данных о заказе??
  const { id } = useParams();
  const { currentOrder } = useSelector(getUserOrdersData);
  // console.log('current order:', currentOrder);
  useEffect(() => {
    dispatch(getOrder(id));
  }, [id]);

  // const { currentOrder } = useSelector(getOrder);
  // console.log('тест заказа', currentOrder);

  return (
    <>
      <div className='order__after-block'>
        <ul className='order__after-info'>
          <li className='order__after-part'>
            <p className='order__after-title'>Номер заказа:</p>
            <p className='order__after-text'>{currentOrder.number_order}</p>
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
              {convertToLocaleStringRub(total)}
            </p>
          </li>
        </ul>
        <button type='button' className='order__check-btn'>
          Электронный чек
        </button>
      </div>
      {/* <OrderList items={itemsForOrder} /> */}
    </>
  );
};

export default OrderAfter;
