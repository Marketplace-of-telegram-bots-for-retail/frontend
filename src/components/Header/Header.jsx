import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import './Header.css';
import { ARR_NAV } from '../../utils/constants';
import SearchInputBox from '../form-items/SearchInputBox/SearchInputBox';
import logo from '../../images/images-new/logo-botmarket.png';
import { useScroll } from '../../hooks/useScroll';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { getCartData, getProductsData, getAuthorisationData } from '../../store';

const Header = ({ setShowAuthButtons }) => {
  const currentUser = useContext(CurrentUserContext);
  const { scrollPosition } = useScroll();
  const { favoritesCount } = useSelector(getProductsData);
  const { total_quantity } = useSelector(getCartData);
  const { isAuthorized } = useSelector(getAuthorisationData);

  const [isLogin, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!isLogin);
    setShowAuthButtons(true);
  };
  const headerMenuFixed = scrollPosition >= 108;

  return (
    <section className='page__header header'>
      <div className='header__container'>
        <nav className='header__nav'>
          {ARR_NAV.map((link, i) => {
            return (
              <HashLink key={i} to={link.link} className='header__link'>
                {link.label}
              </HashLink>
            );
          })}
        </nav>
        <div className='header__wrapper'>
          <div
            className={`header__basis ${
              headerMenuFixed ? 'header__basis_fix ' : ''
            }`}
          >
            <div className='header__navbar'>
              <HashLink smooth className='header__logo' to='/#'>
                <img src={logo} alt='логотип' />
              </HashLink>
              <HashLink smooth className='header__button-medium' to='/#'>
                <span className='header__catalog-icon'></span>
                <span className='header__catalog-text'>Каталог</span>
              </HashLink>
              <SearchInputBox />
            </div>
            <div className='header__navbar'>
              <Link to='/cart' className='header__menu-button-icon'>
                <span className='header__button-icon header__button-icon_cart'></span>
                {total_quantity ? (
                  <span className='header__badge-counter'>
                    {total_quantity}
                  </span>
                ) : null}
                <span className='header__button-text'>Корзина</span>
              </Link>
              <Link to='/favorites' className='header__menu-button-icon'>
                <span className='header__button-icon header__button-icon_favorite'></span>
                {favoritesCount > 0 ? (
                  <span className='header__badge-counter'>
                    {favoritesCount}
                  </span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
