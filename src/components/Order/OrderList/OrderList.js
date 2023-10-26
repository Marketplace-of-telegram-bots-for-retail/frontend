/* eslint-disable no-unused-vars */
import { React } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OrderCard from '../OrderCard/OrderCard';

const OrderList = () => {
  const dispatch = useDispatch();
  const {
    items
  } = useSelector((state) => state.dataCart);

  return (
    <div className="order__block order__block_type_info">
      <div className="order__info-heading">
        <h2 className="order__heading">Состав заказа</h2>
        <Link to="/cart" className="order__return-link">Изменить</Link>
      </div>
      <ul className="order__list">
        {items.map((item) => {
          return <OrderCard key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default OrderList;