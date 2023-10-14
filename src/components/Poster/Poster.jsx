import React, { useState } from 'react';
import './Poster.css';

export const Poster = () => {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <article className='content__poster poster'>
      <div className='poster__wrapper'>
        <div className='poster__inner-wrapper'>
          <h2 className='poster__title'>
            Крупнейший маркетплейс телеграм-ботов
          </h2>
          <p className='poster__text-wrapper'>
            <span className='poster__curly-text'>3 бота по цене 2</span>
            <span className='poster__curly-icon'></span>
          </p>
        </div>
        <div className='poster__images'></div>
        <button
          type='button'
          className='poster__button'
          onClick={() => setIsOpen(false)}
        >
          <svg
            className='poster__button-svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='#737373'
          >
            <path d='M3.51472 20.4853C3.15423 20.1248 3.15423 19.5403 3.51472 19.1799L19.1799 3.51472C19.5403 3.15424 20.1248 3.15424 20.4853 3.51472C20.8458 3.8752 20.8458 4.45966 20.4853 4.82015L4.82015 20.4853C4.45966 20.8458 3.8752 20.8458 3.51472 20.4853Z' />
            <path d='M20.4853 20.4853C20.1248 20.8458 19.5403 20.8458 19.1799 20.4853L3.51472 4.82015C3.15423 4.45966 3.15423 3.8752 3.51472 3.51472C3.8752 3.15423 4.45966 3.15424 4.82015 3.51472L20.4853 19.1799C20.8458 19.5403 20.8458 20.1248 20.4853 20.4853Z' />
          </svg>
        </button>
      </div>
    </article>
  ) : null;
};
