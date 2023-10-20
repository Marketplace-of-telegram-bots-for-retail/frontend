import React, { useCallback, useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts, getFavorites } from '../../store/dataProductsStateSlice';
import './App.css';
import { api } from '../../utils/Api';
import { checkToken, setToken } from '../../utils/tokenStorage';
import Header from '../Header/Header';
import { Poster } from '../posters';
import AuthButtons from '../auth/AuthButtons/AuthButtons';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';
import Profile from '../profile';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import ErrorPage from '../ErrorPage/ErrorPage';
import Favorites from '../Favorites/Favorites';
import Preloader from '../Preloader/Preloader';
import Main from '../Main/Main';
import { CurrentUserContext } from '../../contexts/currentUserContext';
// import { useFormRequest } from '../../hooks/useFormRequest';
import Showcase from '../showcase/Showcase/Showcase';
import useModal from '../../hooks/useModal';
import Promo from '../info/Promo/Promo';
import Salesman from '../Salesman/Salesman';

const App = () => {
  // const { formRequest } = useFormRequest();

  const [isPreloader, setPreloader] = useState(false);
  const [isAuthorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const dispatch = useDispatch();

  const [showAuthButtons, setShowAuthButtons] = useState(false);
  useModal(showAuthButtons, setShowAuthButtons);

  const [showAuthModal, setShowAuthModal] = useState(false);
  useModal(showAuthModal, setShowAuthModal);

  const [queryMessage, setQueryMessage] = useState('');

  // Выполнить первичную загрузку карточек
  useEffect(() => {
    console.log('useEffect => getProducts');
    dispatch(getProducts());
  }, []);

  // Чекнуть токен, произвести загрузку данных пользователя, избранных (корзина не добавлена)
  const cbTokenCheck = useCallback(async () => {
    setPreloader(true);
    try {
      if (checkToken()) {
        const userData = await api.getUserMe();
        if (userData) {
          setCurrentUser(userData);
          setAuthorized(true);
          // Загрузить избранные
          // getFavoritesProducts();
          dispatch(getFavorites());
          // Обновить стейт
          dispatch(getProducts());
        }
      }
    } catch (err) {
      console.log('cbTokenCheck => getUserMe =>', err); // Консоль
      setAuthorized(false);
    } finally {
      setPreloader(false);
    }
  }, [dispatch]);

  // Выполнить первичную проверку по токену и загрузить данные
  useEffect(() => {
    cbTokenCheck();
  }, []);

  // Авторизация
  const cbLogIn = async (data) => {
    setPreloader(true);
    try {
      const res = await api.postLogIn(data);
      setToken(res.auth_token, data.rememberMe);
      setShowAuthButtons(false);
      setShowAuthModal(false);
      cbTokenCheck();
      // загрузить данные пользователя и чекнуть jwt
    } catch (err) {
      console.log('cbLogIn => err', err); // Консоль
      const errMessage = Object.values(err)[0];
      setQueryMessage(errMessage);
    } finally {
      setPreloader(false);
    }
  };

  // Регистрация
  const cbRegister = async (data) => {
    setPreloader(true);
    try {
      await api.postUser(data);
      cbLogIn(data);
      localStorage.removeItem('registerFormData');
    } catch (err) {
      console.log('cbRegister => err', err); // Консоль
      const errMessage = await Object.values(err)[0];
      setQueryMessage(errMessage);
    } finally {
      setPreloader(false);
    }
  };

  // Логаут
  const cbLogout = async () => {
    setPreloader(true);
    try {
      await api.postLogOut();
      localStorage.clear();
      sessionStorage.clear();
      setAuthorized(false);
      setCurrentUser({});
      // загрузить данные пользователя и чекнуть jwt
      cbTokenCheck();
      // Обновить стейты
      getFavoritesProducts();
      getProducts();
    } catch (err) {
      console.log('cbRegister => err', err); // Консоль
    } finally {
      setPreloader(false);
    }
  };

  // Изменить пароль
  const cbChangePassword = async (data) => {
    setPreloader(true);
    try {
      await api.changePassword(data);
      cbTokenCheck();
    } catch (err) {
      console.log('cbChangePassword => err', err); // Консоль
      const errMessage = await Object.values(err)[0];
      setQueryMessage(errMessage);
    } finally {
      setPreloader(false);
    }
  };

  // Обновление данных профиля
  const cbUpdateProfile = async (data) => {
    setPreloader(true);
    try {
      await api.patchUserMe(data);
      cbChangePassword({
        current_password: data.current_password,
        new_password: data.new_password,
      });
      cbTokenCheck();
    } catch (err) {
      console.log('cbUpdateProfile => err', err); // Консоль
      const errMessage = await Object.values(err)[0];
      setQueryMessage(errMessage);
    } finally {
      setPreloader(false);
    }
  };

  // Удаление пользователя

  const cbDeleteUser = async () => {
    setPreloader(true);
    try {
      await api.deleteUserMe();
      cbTokenCheck();
    } catch (err) {
      console.log('cbDeleteUser => err', err); // Консоль
      const errMessage = await Object.values(err)[0];
      setQueryMessage(errMessage);
    } finally {
      setPreloader(false);
    }
  };

  // Временно автоматический вход
  //     email: 'user-test@user-test.com',
  //     password: 'Qwe123Asd456',

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isPreloader && <Preloader />}
      {showAuthButtons && (
        <AuthButtons
          cbLogIn={cbLogIn}
          cbRegister={cbRegister}
          isAuthorized={isAuthorized}
          showAuthButtons={showAuthButtons}
          setShowAuthButtons={setShowAuthButtons}
          showAuthModal={showAuthModal}
          setShowAuthModal={setShowAuthModal}
          queryMessage={queryMessage}
          setQueryMessage={setQueryMessage}
        />
      )}
      <Routes>
        {/* 1 Уровень вложенности */}
        <Route
          path='/'
          element={
            <>
              <Header
                setShowAuthButtons={setShowAuthButtons}
                isAuthorized={isAuthorized}
                // onSearch={getSearchProducts}
                isPreloader={isPreloader}
              />
              <Main>
                <Outlet />
              </Main>
              <Footer />
            </>
          }
        >
          {/* 2 Уровень вложенности */}
          <Route
            index
            element={
              <>
                <Poster />
                <Showcase
                  // productsPage={currentProdacts}
                  oonLike={() => {}}
                  // onSearch={getSearchProducts}
                  // onMore={getMoreProducts}
                  isPreloader={isPreloader}
                />
              </>
            }
          />
          <Route path='/products/:id' element={<Product onLike={() => {}} />} />
          <Route path='*' element={<ErrorPage pageNotFound />} />
          <Route path='/favorites' element={<Favorites onLike={() => {}} />} />
          <Route path='/cart' element={<Cart />} />
          <Route
            path='/profile'
            element={
              <Profile
                cbLogout={cbLogout}
                cbUpdateProfile={cbUpdateProfile}
                cbDeleteUser={cbDeleteUser}
              />
            }
          />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route
            path='/salesman'
            // стоит заглушка
            element={<Salesman />}
          />
          <Route
            path='/return'
            // стоит заглушка
            element={<ErrorPage />}
          />
          <Route
            path='/promo'
            // стоит заглушка
            element={<Promo />}
          />
        </Route>
      </Routes>
    </CurrentUserContext.Provider>
  );
};

export default App;
