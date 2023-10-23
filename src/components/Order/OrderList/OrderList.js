import { React } from 'react';
import { Link } from 'react-router-dom';

const OrderList = () => {
  return (
    <div className="order__block order__block_type_info">
      <div className="order__info-heading">
        <h2 className="order__heading">Состав заказа</h2>
        <Link to="/cart" className="order__return-link">Изменить</Link>
      </div>
      <ul className="order__list">
        <li className="order__list-item">
          <div className="order__item-info">
            <div className="order__item-subblock">
              <p className="order__item-title">Название бота, которое может занимать 2 строки Название бота, которое может</p>
              <p className="order__subtext">Артикул: 000001</p>
            </div>
            <div className="order__item-subblock">
              <p className="order__cost">1000 ₽</p>
              <p className="order__subtext order__subtext_type_cost">500 ₽/шт.</p>
            </div>
          </div>
          <p className="order__amount">2 шт.</p>
        </li>
        <li className="order__list-item">
          <div className="order__item-info">
            <div className="order__item-subblock">
              <p className="order__item-title">Название бота, которое может занимать 2 строки Название бота, которое может</p>
              <p className="order__subtext">Артикул: 000001</p>
            </div>
            <div className="order__item-subblock">
              <p className="order__cost">1000 ₽</p>
              <p className="order__subtext order__subtext_type_cost">500 ₽/шт.</p>
            </div>
          </div>
          <p className="order__amount">2 шт.</p>
        </li>
      </ul>
    </div>
  );
};

export default OrderList;