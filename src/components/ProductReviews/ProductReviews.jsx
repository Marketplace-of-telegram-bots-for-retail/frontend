import React from 'react';
import './ProductReviews.css';
import StarRating from '../StarRating/StarRating';
import avatar from '../../images/Group.svg';
import ProductReviewInitial from '../ProductReviewInitial/ProductReviewInitial';

const ProductReviews = () => {
  return (
    <div className='product__rewiews'>
      <ul className='product__reviews-group'>
        <li className='product__review'>
          <div className='product__review-row'>
            <div className='product__review-set'>
              <img className='product__review-avatar' src={avatar} alt='аватар' />
              <span className='product__review-author'>Андрей Бургеров</span>
            </div>
            <div className='product__review-set'>
              <span className='product__review-date'>25 сентября 2023</span>
              <StarRating />
            </div>
          </div>
          <p className='product__review-text'>
            Я использую телеграм-бота для своей бургергной уже несколько месяцев, и я очень доволен результатами. Бот помогает мне автоматизировать многие задачи. Это значительно экономит мое время и позволяет мне сосредоточиться на других аспектах бизнеса.
          </p>
        </li>
        <li className='product__review'>
          <div className='product__review-row'>
            <div className='product__review-set'>
              <img className='product__review-avatar' src={avatar} alt='аватар' />
              <span className='product__review-author'>Катя Ботинкова</span>
            </div>
            <div className='product__review-set'>
              <span className='product__review-date'>12 сентября 2023</span>
              <StarRating />
            </div>
          </div>
          <p className='product__review-text'>
            Благодаря телеграм-боту я могу предоставлять своим клиентам более персонализированный сервис. Бот хранит информацию о прошлых покупках и предпочтениях клиентов, что позволяет мне предлагать им товары и услуги, которые им могут понравиться.
          </p>
        </li>
        <li className='product__review'>
          <div className='product__review-row'>
            <div className='product__review-set'>
              <img className='product__review-avatar' src={avatar} alt='аватар' />
              <span className='product__review-author'>Евгений Пирогов</span>
            </div>
            <div className='product__review-set'>
              <span className='product__review-date'>5 августа 2022</span>
              <StarRating />
            </div>
          </div>
          <p className='product__review-text'>
            Благодаря телеграм-боту я могу предоставлять своим клиентам более персонализированный сервис. Бот хранит информацию о прошлых покупках и предпочтениях клиентов, что позволяет мне предлагать им товары и услуги, которые им могут понравиться.
          </p>
        </li>
      </ul>
      <ProductReviewInitial />
    </div>
  );
};

export default ProductReviews;