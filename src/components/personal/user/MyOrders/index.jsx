/* eslint-disable no-unused-vars */
import './index.css';
import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrdersData } from '../../../../store/selectors';
import { getOrdersList } from '../../../../store/actions';

import OrdersList from './OrdersList/OrdersList';
import Dropdown from './Dropdown/Dropdown';

function MyOrders() {
  const dispatch = useDispatch();

  const { allOrders } = useSelector(getUserOrdersData);
  const [orders, setOrders] = useState(allOrders);

  useEffect(() => {
    dispatch(getOrdersList());
    setOrders(allOrders);
  }, []);

  return (
    <section className='orders__container'>
      <Dropdown setOrders={setOrders} />
      <OrdersList orders={orders} setOrders={setOrders} />
    </section>
  );
}

export default MyOrders;
