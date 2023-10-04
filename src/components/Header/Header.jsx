/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ARR_NAV } from '../../utils/constants';
import './Header.css';
import Logo from '../../images/Logo.png';
import Stripes from '../../images/ic_menu-catalog-24.svg';
import searchButton from '../../images/01 align center.svg';
import basket from '../../images/Button-menu-icon.png';
import favourites from '../../images/Button-menu-favorites.png';

const Header = ({ showAuthButtons, setShowAuthButtons }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/basket');
  };
  return (
    <section className='header'>
      <nav className='header__nav'>
        {ARR_NAV.map((link, i) => {
          return (
            <a
              key={i}
              href='#'
              className={`header__link ${i === 4 && 'header__link-seller'}`}
            >
              {link}
            </a>
          );
        })}
      </nav>
      <article className='header__basis'>
        <img className='header__logo' src={Logo} alt='лого' />
        <button className='header__catalog' type='button'>
          <div className='header__catalog-container'>
            <img src={Stripes} alt='полоски' />
            <span className='header__catalog-text'>Каталог</span>
          </div>
        </button>
        <div style={{ position: 'relative', marginRight: '3rem' }}>
          <input
            className='header__input'
            type='text'
            placeholder='Искать бота'
          ></input>
          <button className='header__search-button' type='button'>
            <img
              className='header__search-icon'
              src={searchButton}
              alt='кнопка поиска'
            />
          </button>
        </div>
        <img
          className='header__basket-button'
          src={basket}
          alt='корзина'
          onClick={handleNavigate}
        />
        <img
          className='header__favourite-button'
          src={favourites}
          alt='избранное'
        />
        <button
          className='header__enter-button'
          type='button'
          onClick={() => setShowAuthButtons(!showAuthButtons)}
        >
          Войти
        </button>
      </article>
    </section>
  );
};

export default Header;
