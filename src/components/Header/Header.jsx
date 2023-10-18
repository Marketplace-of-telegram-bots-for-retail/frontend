import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import { collecSearch } from '../../store/dataSearchFormSlice';
import { ARR_NAV } from '../../utils/constants';
import './Header.css';
import logo from '../../images/logo-color.png';
import { useForm } from '../../hooks/useForm';
import { CurrentUserContext } from '../../contexts/currentUserContext';

const Header = ({
  setShowAuthButtons,
  cartPage,
  isAuthorized,
  onSearch,
  isPreloader,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange } = useForm();
  const dispatch = useDispatch();
  const favoritesCount = useSelector(
    (state) => state.dataFavoritesState.pageFavoritesCount
  );
  // Обновляем стейт Redux
  useEffect(() => {
    dispatch(collecSearch(values?.search));
  }, [values, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };
  useEffect(() => {
    onSearch();
  }, [values?.search]);

  const [isLogin, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!isLogin);
    setShowAuthButtons(true);
  };
  return (
    <section className='page__header header'>
      <nav className='header__nav'>
        {ARR_NAV.map((link, i) => {
          return (
            <HashLink key={i} to={link.link} className='header__link'>
              {link.label}
            </HashLink>
          );
        })}
      </nav>
      <article className='header__basis'>
        <div className='header__navbar'>
          <NavLink className='header__logo' to='/'>
            <img src={logo} alt='логотип' />
          </NavLink>
          <NavLink className='header__button-medium' to='/'>
            <span className='header__catalog-icon'></span>
            <span className='header__catalog-text'>Каталог</span>
          </NavLink>
          <form className='header__search-form' onSubmit={handleSubmit}>
            <input
              type='search'
              className='header__search-input'
              placeholder='Искать бота'
              value={values?.search || ''}
              name='search'
              onChange={handleChange}
              disabled={isPreloader}
              onBlur={onSearch}
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
            {cartPage?.count > 0 ? (
              <span className='header__badge-counter'>1</span>
            ) : null}
            <span className='header__button-text'>Корзина</span>
          </Link>
          <Link to='/favorites' className='header__menu-button-icon'>
            <span className='header__button-icon header__button-icon_favorite'></span>
            {favoritesCount > 0 ? (
              <span className='header__badge-counter'>{favoritesCount}</span>
            ) : null}
            <span className='header__button-text'>Избранное</span>
          </Link>
          {!isAuthorized ? (
            <button
              className='header__button-small header__button-small_border'
              type='button'
              onClick={() => handleLogin()}
            >
              Войти
            </button>
          ) : (
            <Link to='/profile' className='header__menu-button-icon '>
              <span className='header__button-icon header__button-icon_profile'></span>
              <span className='header__button-text'>
                {currentUser.first_name}
              </span>
            </Link>
          )}
        </div>
      </article>
    </section>
  );
};

export default Header;
