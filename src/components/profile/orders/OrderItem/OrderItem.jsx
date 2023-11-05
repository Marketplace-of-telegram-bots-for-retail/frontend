/* eslint-disable no-unused-vars */
import { React, useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, getUserOrdersData } from '../../../../store/selectors';

import down from '../../../../images/orders_down.svg';
import up from '../../../../images/orders_up.svg';

function OrderItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // в компоненте - перебор из item.product_list

  return (
    <li className='orders__item'>
      <div className='orders__up-block'>
        <div className='orders__left-part'>
          <p className='orders__item-title'>Заказ от 18 октября 2023</p>
          <p className='orders__text'>{item.number_order}</p>
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
      {isOpen ? <div>helloooo</div> : <div>world</div>}
    </li>
  );
}

export default OrderItem;
