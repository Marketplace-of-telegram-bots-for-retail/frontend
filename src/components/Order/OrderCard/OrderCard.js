/* eslint-disable no-unused-vars */
import { React } from 'react';
import { useDispatch } from 'react-redux';

const OrderCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="order__list-item">
      <div className="order__item-info">
        <div className="order__item-subblock">
          <p className="order__item-title">{item.name}</p>
          <p className="order__subtext">{`Артикул: ${item.article}`}</p>
        </div>
        <div className="order__item-subblock">
          <p className="order__cost">{`${item.cost.toLocaleString('ru-RU')} ₽`}</p>
          {item.cost !== item.price &&
          <p className="order__subtext order__subtext_type_cost">{`${item.price.toLocaleString('ru-RU')} ₽/шт.`}</p>}
        </div>
      </div>
      <p className="order__amount">{`${item.quantity} шт.`}</p>
    </div>
  );
};

export default OrderCard;