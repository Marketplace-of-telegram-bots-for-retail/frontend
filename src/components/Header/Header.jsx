import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import { collecSearch } from '../../store/dataSearchFormSlice';
import { ARR_NAV } from '../../utils/constants';
import './Header.css';
import logo from '../../images/logo-color.png';
import { useForm } from '../../hooks/useForm';
import { useScroll } from '../../hooks/useScroll';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { getProducts } from '../../store/dataProductsStateSlice';
import { useQueryParameter } from '../../hooks/useQueryParameter';

const Header = ({ setShowAuthButtons, isAuthorized, isPreloader }) => {
  const currentUser = useContext(CurrentUserContext);
  const { scrollPosition } = useScroll();
  const { values, handleChange } = useForm();
  const { formRequest } = useQueryParameter();
  const dispatch = useDispatch();
  const { favoritesCount } = useSelector((state) => state.dataProductsState);
  const { items } = useSelector((state) => state.dataCart);
  const locatoin = useLocation();
  const navigate = useNavigate();

  // Обновляем стейт Redux
  useEffect(() => {
    dispatch(collecSearch(values?.search));
  }, [values, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getProducts(formRequest));
    if (locatoin.pathname !== '/') {
      console.log(locatoin);
      navigate('/');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };
  const handleOnBlur = () => {
    // event.preventDefault();
    dispatch(getProducts(formRequest));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

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
              <form className='header__search-form' onSubmit={handleSubmit}>
                <input
                  type='search'
                  className='header__search-input'
                  placeholder='Искать бота'
                  value={values?.search || ''}
                  name='search'
                  onChange={handleChange}
                  onBlur={handleOnBlur}
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
                {items.length > 0 ? (
                  <span className='header__badge-counter'>{items.length}</span>
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
