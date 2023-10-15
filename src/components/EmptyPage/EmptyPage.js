import React from 'react';
import { NavLink } from 'react-router-dom';
import './EmptyPage.css';
import HeartIcon from '../../images/heart-1.svg';

const EmptyPage = () => {
  return (
    <section className='content__empty-page empty-page'>
      <img className='empty-page__icon' src={HeartIcon} alt='иконка' />
      <h1 className='empty-page__title'>В избранном пока пусто</h1>
      <p className='empty-page__text'>
        Нажмите ❤️ и товар добавится в Избранное
      </p>
      <NavLink to='/' className='empty-page__button-lagre'>
        На главную
      </NavLink>
    </section>
  );
};

export default EmptyPage;
