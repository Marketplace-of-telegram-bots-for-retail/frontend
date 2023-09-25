import React from 'react';
import './ProductDetail.css';
import ProductPhotos from '../ProductPhotos/ProductPhotos';
import award from '../../images/Pixel-36.svg';
import dash from '../../images/ic_minus-24.svg';
import video from '../../images/video.jpg';

const ProductDetail = () => {
  return (
    <div className='product__good-detail'>
      <ProductPhotos />
      <div className='product__good-award'>
        <img className='product__good-prize' src={award} alt='награда' />
        <h2 className='product__good-heading'>Лучший продавец ботов</h2>
      </div>
      <div className='product__good-items'>
        <h3 className='product__good-item product__good-item_active'>Функционал</h3>
        <h3 className='product__good-item'>Отзывы (0)</h3>
      </div>
      <div className='product__good-description'>
        <p className="product__good-text">Веб-приложение в Телеграмме выглядит как сайт (интернет-магазин) и позволяет совершать покупки.</p>
        <ul className='product__good-paragraphs'>
          <li className='product__good-paragraph'>
            <img className='product__good-dash' src={dash} alt='тире' />
            <p className="product__good-text">размещение витрины товаров или услуг</p>
          </li>
          <li className='product__good-paragraph'>
            <img className='product__good-dash' src={dash} alt='тире' />
            <p className="product__good-text">внедрение корзины и формы заказа с заполнением данных</p>
          </li>
          <li className='product__good-paragraph'>
            <img className='product__good-dash' src={dash} alt='тире' />
            <p className="product__good-text">подключение системы оплаты (в том числе с использованием Google Pay и Apple Pay</p>
          </li>
          <li className='product__good-paragraph'>
            <img className='product__good-dash' src={dash} alt='тире' />
            <p className="product__good-text">настройка пуш-уведомлений</p>
          </li>
          <li className='product__good-paragraph'>
            <img className='product__good-dash' src={dash} alt='тире' />
            <p className="product__good-text">интеграция веб-приложения Telegram с учетной системой или CRM (iiko, RetailCRM, Битрикс24, VirtualPOS, Workabox, amoCRM, ClientBase</p>
          </li>
        </ul>
      </div>
      <div className='product__good-videos'>
        <h2 className='product__good-heading'>Видеообзор</h2>
        <a href='http' target="_blank" rel="noreferrer">
          <img className="product__good-video" src={video} alt='видеообзор' />
        </a>
      </div>

    </div>
  );
};

export default ProductDetail;