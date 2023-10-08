import React from 'react';
import './ProductDescription.css';
import dash from '../../images/ic_minus-24.svg';

const ProductDescription = ({ card }) => {
  return (
    <div className='product__description'>
      <p className="product__description-text">Веб-приложение в Телеграмме выглядит как сайт (интернет-магазин) и позволяет совершать покупки.</p>
      <ul className='product__description-paragraphs'>
        <li className='product__description-paragraph'>
          <img className='product__description-dash' src={dash} alt='тире' />
          <p className="product__description-text">размещение витрины товаров или услуг</p>
        </li>
        <li className='product__description-paragraph'>
          <img className='product__description-dash' src={dash} alt='тире' />
          <p className="product__description-text">внедрение корзины и формы заказа с заполнением данных</p>
        </li>
        <li className='product__description-paragraph'>
          <img className='product__description-dash' src={dash} alt='тире' />
          <p className="product__description-text">подключение системы оплаты (в том числе с использованием Google Pay и Apple Pay</p>
        </li>
        <li className='product__description-paragraph'>
          <img className='product__description-dash' src={dash} alt='тире' />
          <p className="product__description-text">настройка пуш-уведомлений</p>
        </li>
        <li className='product__description-paragraph'>
          <img className='product__description-dash' src={dash} alt='тире' />
          <p className="product__description-text">интеграция веб-приложения Telegram с учетной системой или CRM (iiko, RetailCRM, Битрикс24, VirtualPOS, Workabox, amoCRM, ClientBase</p>
        </li>
      </ul>
      <div className='product__description-videos'>
        <h2 className='product__description-heading'>Видеообзор</h2>
        <a href={card.video} target="_blank" rel="noreferrer">
          <img className="product__description-video" src={card.image_1} alt={card.name} />
        </a>
      </div>
    </div>
  );
};

export default ProductDescription;