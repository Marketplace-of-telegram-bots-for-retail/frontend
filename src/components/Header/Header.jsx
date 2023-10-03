/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ARR_NAV } from '../../utils/constants';
import './Header.css';
import searchButton from '../../images/01 align center.svg';
// import favourites from '../../images/Button-menu-favorites.png';

const Header = ({ showAuthButtons, setShowAuthButtons }) => {
  // Временные
  const user = {
    name: 'Валерка',
  };

  const [isLogin, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!isLogin);
    setShowAuthButtons(!showAuthButtons);
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
        <div className='header__navbar'>
          <NavLink className='header__logo' to='/'></NavLink>
          <button className='header__button-medium' type='button'>
            <span className='header__catalog-icon'></span>
            <span className='header__catalog-text'>Каталог</span>
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
        </div>
        <div className='header__navbar'>
          <Link to='/cart' className='header__menu-button-icon'>
            <span className='header__button-icon header__button-icon_cart'></span>
            <span className='header__badge-counter'>2</span>
            Корзина
          </Link>
          <Link to='/favorites' className='header__menu-button-icon'>
            <span className='header__button-icon header__button-icon_favorite'></span>
            <span className='header__badge-counter'>10</span>
            Избранное
          </Link>
          {!isLogin ? (
            <button
              className='header__button-small header__button-small_border'
              type='button'
              onClick={() => handleLogin()}
            >
              Войти
            </button>
          ) : (
            <Link
              to='/profile'
              className='header__menu-button-icon '
              onClick={() => handleLogin()}
            >
              <span className='header__button-icon header__button-icon_profile'></span>
              {/* <span className='header__badge-counter'></span> */}
              {user.name}
            </Link>
          )}
        </div>
      </article>
    </section>
  );
};

export default Header;
