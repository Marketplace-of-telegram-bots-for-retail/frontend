/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../ItemCard/ItemCard';
import {
  deleteOrder,
  payOrdersId
} from '../../../../../store/actions';

import down from '../../../../../images/orders_down.svg';
import up from '../../../../../images/orders_up.svg';

function OrderItem({ item, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const date = new Date(item.created)
    .toLocaleString('ru-RU', options)
    .replace(/\s*г\./, '');
  const formattedDate = `${date}`;

  const checkFirstItem = (element) => {
    const first = item.product_list[0];
    if (first === element) return true;
    return false;
  };

  const checkLastItem = (element) => {
    const last = item.product_list[item.product_list.length - 1];
    if (last === element) return true;
    return false;
  };

  const handleDelete = async () => {
    await dispatch(deleteOrder(item.id));
    onDelete(item);
  };

  const handleOrderPay = async () => {
    await dispatch(payOrdersId(item.id));
  };

  return (
    <li className='orders__item'>
      <div className='orders__up-block'>
        <div className='orders__left-part'>
          <p className='orders__item-title'>
            Заказ от
            {' '}
            {formattedDate}
          </p>
          <p className='orders__text'>
            №
            {' '}
            {item.number_order}
          </p>
        </div>
        <div className='orders__right-part'>
          <p className='orders__text'>
            {item.is_paid ? 'Оплачено: ' : 'Не оплачен: '}
            <span
              className={`orders__summ ${
                item.is_paid ? '' : 'orders__summ_type_unpaid'
              }`}
            >
              {item.total_cost}
              {' '}
              &#8381;
            </span>
          </p>
          <div className='orders__open-products' onClick={() => setIsOpen(!isOpen)}>
            <p className='orders__open-products-link'>Состав заказа</p>
            <img className="orders__chevron" src={!isOpen ? down : up} alt="Иконка открытия списка" />
          </div>
        </div>
      </div>
      <ul className={`orders__product-list ${isOpen ? 'orders__product-list_visible' : ''}`}>
        {item.product_list.map((element) => {
          return (
            <ItemCard key={element.id} element={element} firstItem={checkFirstItem(element)} lastItem={checkLastItem(element)} isPaid={item.is_paid} orderId={item.id} onDelete={() => handleDelete(item.id)} onClickPay={handleOrderPay} />
          );
        })}
      </ul>
    </li>
  );
}

export default OrderItem;