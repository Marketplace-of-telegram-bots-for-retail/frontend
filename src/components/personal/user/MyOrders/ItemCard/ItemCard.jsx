/* eslint-disable no-unused-vars */
import './ItemCard.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import download from '../../../../../images/myordersDownload.svg';
import review from '../../../../../images/myordersReview.svg';
import back from '../../../../../images/myordersReturn.svg';
import pay from '../../../../../images/myordersPay.svg';
import remove from '../../../../../images/myordersDelete.svg';

// одна строка бота в списке заказов

function ItemCard({ element, firstItem, lastItem, isPaid, orderId, onDelete }) {
  const navigate = useNavigate();
  return (
    <li className='item' key={element.id}>
      <div className={`item__info ${lastItem ? 'item__info_type_last' : ''}`}>
        <div className='item__all-info'>
          <div className='items__texts'>
            <p className='item__title'>{element.name}</p>
            <p className='item__article'>
              Артикул:
              {' '}
              {element.article}
            </p>
          </div>
          <p className='items__cost'>
            {element.cost}
            {' '}
            &#8381;
          </p>
        </div>
        <p className='item__amout'>
          {element.quantity}
          {' '}
          шт.
        </p>
      </div>
      {isPaid && (
        <div className='item__functions'>
          <button type="button" className='item__function'>
            <img className='item__icon' src={download} alt='Иконка ссылки' />
            <p className='item__todo'>Скачать</p>
          </button>
          <button type="button" onClick={() => navigate(`/products/${element.id}`)} className='item__function'>
            <img className='item__icon' src={review} alt='Иконка ссылки' />
            <p className='item__todo'>Оставить отзыв</p>
          </button>
          <button type="button" className='item__function'>
            <img className='item__icon' src={back} alt='Иконка ссылки' />
            <p className='item__todo'>Оформить возврат</p>
          </button>
        </div>
      )}
      {!isPaid && firstItem && (
        <div className='item__functions'>
          <button type="button" onClick={() => navigate(`/orders/${orderId}`)} className='item__function'>
            <img className='item__icon' src={pay} alt='Иконка ссылки' />
            <p className='item__todo'>Оплатить</p>
          </button>
          <button type="button" className='item__function' onClick={onDelete}>
            <img className='item__icon' src={remove} alt='Иконка ссылки' />
            <p className='item__todo'>Удалить</p>
          </button>
        </div>
      ) }
    </li>
  );
}

export default ItemCard;
