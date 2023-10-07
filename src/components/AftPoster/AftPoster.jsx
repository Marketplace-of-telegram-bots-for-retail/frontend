import React from 'react';
import './AftPoster.css';

export const AftPoster = () => {
  return (
    <article className='content__aft-poster aft-poster'>
      <div className='aft-poster__wrapper'>
        <h3 className='aft-poster__title'>Не нашлось нужного бота?</h3>
        <p className='aft-poster__text'>
          Закажите разработку бота под свой бизнес
        </p>
        <div className='aft-poster__link-wrapper'>
          <p className='aft-poster__text-link'>Отправить заявку </p>
          <span className='aft-poster__icon-link'></span>
        </div>
      </div>
      <span className='aft-poster__bot-icon aft-poster__bot-icon_big'></span>
      <span className='aft-poster__bot-icon aft-poster__bot-icon_small'></span>
    </article>
  );
};
