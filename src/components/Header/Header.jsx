import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ARR_NAV } from '../../utils/constants';
import './Header.css';
import logo from '../../images/logo-botmarket 1.svg';
import { useForm } from '../../hooks/useForm';

const Header = ({ showAuthButtons, setShowAuthButtons }) => {
  const { values, handleChange } = useForm();
  // Временные
  const user = {
    name: 'Валерка',
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit =>', values.search);
  };
  const isPreloader = false;

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
            <NavLink key={i} to={link.path} className='header__link'>
              {link.labelName}
            </NavLink>
          );
        })}
      </nav>
      <article className='header__basis'>
        <div className='header__navbar'>
          <NavLink className='header__logo' to='/'>
            <img src={logo} alt='логотип' />
          </NavLink>
          <button className='header__button-medium' type='button'>
            <span className='header__catalog-icon'></span>
            <span className='header__catalog-text'>Каталог</span>
          </button>
          <form className='header__search-form' onSubmit={handleSubmit}>
            <input
              type='search'
              className='header__search-input'
              placeholder='Искать бота'
              value={values?.search || ''}
              name='search'
              required
              onChange={handleChange}
              disabled={isPreloader}
            ></input>
            <button
              className='header__search-button'
              type='submit'
              placeholder='Искать'
              disabled={isPreloader}
            >
              <span className='header__search-icon'></span>
            </button>
          </form>
        </div>
        <div className='header__navbar'>
          <Link to='/cart' className='header__menu-button-icon'>
            <span className='header__button-icon header__button-icon_cart'></span>
            <span className='header__badge-counter'>2</span>
            <span className='header__button-text'>Корзина</span>
          </Link>
          <Link to='/favorites' className='header__menu-button-icon'>
            <span className='header__button-icon header__button-icon_favorite'></span>
            <span className='header__badge-counter'>10</span>
            <span className='header__button-text'>Избранное</span>
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
              <span className='header__button-text'>{user.name}</span>
            </Link>
          )}
        </div>
      </article>
    </section>
  );
};

export default Header;
