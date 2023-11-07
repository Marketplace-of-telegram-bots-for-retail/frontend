import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OrderItem from '../OrderItem/OrderItem';

function OrdersList({ orders, setOrders }) {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    setOrders(orders);
  }, [orders]);

  return (
    <ul className='orders__list'>
      {orders.map((item) => (
        <OrderItem item={item} />
      ))}
    </ul>
  );
}

export default OrdersList;