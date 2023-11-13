import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OrderItem from '../OrderItem/OrderItem';

function OrdersList({ orders, setOrders }) {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    setOrders(orders);
  }, [orders]);

  const handleDelete = (item) => {
    setOrders((orders) => orders.filter((m) => m.id !== item.id));
  };

  return (
    <ul className='orders__list'>
      {orders.map((item) => (
        <OrderItem item={item} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default OrdersList;