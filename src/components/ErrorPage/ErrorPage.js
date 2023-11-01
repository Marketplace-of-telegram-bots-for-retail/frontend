import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ErrorPage.css';
import ToolsIcon from '../../images/images-new/gears-repair.png';
import PageNotFoundIcon from '../../images/images-new/404-error.png';

const ErrorPage = ({ pageNotFound }) => {
  const params = {
    tools: { image: ToolsIcon, text: 'Эта страница в разработке. Скоро...' },
    err404: { image: PageNotFoundIcon, text: 'Страница не найдена' },
  };

  const [isParams, setParams] = useState({});
  useEffect(() => {
    if (pageNotFound === true) {
      setParams({ ...params.err404 });
    } else setParams({ ...params.tools });
  }, [pageNotFound]);

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

export default ErrorPage;
