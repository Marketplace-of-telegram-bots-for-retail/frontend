/* eslint-disable no-unused-vars */
import './ItemCard.css';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import download from '../../../../../images/myordersDownload.svg';
import review from '../../../../../images/myordersReview.svg';
import back from '../../../../../images/myordersReturn.svg';

// одна строка бота в списке заказов

function ItemCard({ element, lastItem }) {
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
      <div className='item__functions'>
        <Link to="/" className="item__function">
          <img className="item__icon" src={download} alt="Иконка ссылки" />
          <p className="item__todo">Скачать</p>
        </Link>
        <Link to={`/products/${element.id}`} className="item__function">
          <img className="item__icon" src={review} alt="Иконка ссылки" />
          <p className="item__todo">Оставить отзыв</p>
        </Link>
        <Link to="/" className="item__function">
          <img className="item__icon" src={back} alt="Иконка ссылки" />
          <p className="item__todo">Оформить возврат</p>
        </Link>
      </div>
    </li>
  );
}

export default ItemCard;
