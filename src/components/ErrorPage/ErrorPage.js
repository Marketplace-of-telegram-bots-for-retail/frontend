import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ErrorPage.css';
import ToolsIcon from '../../images/tools-icon.svg';
import PageNotFoundIcon from '../../images/pic_404.svg';
import MagnifyingIcon from '../../images/magnifying-glass.svg';

export const ErrorPage = ({ pageNotFound, botNotFound }) => {
  const params = {
    tools: { image: ToolsIcon, text: 'Эта страница в разработке. Скоро...' },
    err404: { image: PageNotFoundIcon, text: 'Страница не найдена' },
    bot: { image: MagnifyingIcon, text: 'Такой бот не найден...' },
  };

  const [isParams, setParams] = useState({});
  useEffect(() => {
    if (pageNotFound === true) {
      setParams({ ...params.err404 });
    } else if (botNotFound === true) {
      setParams({ ...params.bot });
    } else setParams({ ...params.tools });
  }, [pageNotFound, botNotFound]);

  return (
    <section className='content__error-page error-page'>
      <img className='error-page__icon' src={isParams?.image} alt='иконка' />
      <h1 className='error-page__text'>{isParams?.text}</h1>
      <NavLink to='/' className='error-page__button-lagre'>
        На главную
      </NavLink>
    </section>
  );
};
