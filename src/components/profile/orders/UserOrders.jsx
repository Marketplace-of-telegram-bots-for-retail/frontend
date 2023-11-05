/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
import './UserOrders.css';
import { React, useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, getUserOrdersData } from '../../../store/selectors';

import OrdersList from './OrdersList/OrdersList';

import down from '../../../images/orders_down.svg';
import up from '../../../images/orders_up.svg';

// блок "мои заказы" в лк пользователя
// данные из корзины при нажатии "к оформлению" - массив itemsForOrder

function UserOrders() {
  return (
    <section className='orders__container'>
      <OrdersList />
    </section>
  );
}

export default UserOrders;
