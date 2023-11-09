/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  getFavorites,
  cleanLike,
} from '../../store/productsDataSlice';
import { getMinMaxCost } from '../../store/searchFormDataSlice';
import { clearCarts, getCart } from '../../store/cartDataSlice';
import './App.css';
import { api } from '../../utils/Api';
import { checkToken, setToken } from '../../utils/tokenStorage';
import { useQueryParameter } from '../../hooks/useQueryParameter';
import Header from '../Header/Header';
import { Poster } from '../posters';
import AuthButtons from '../auth/AuthButtons/AuthButtons';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';
import Profile from '../personal';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import ErrorPage from '../ErrorPage/ErrorPage';
import Favorites from '../Favorites/Favorites';
import Preloader from '../Preloader/Preloader';
import Main from '../Main/Main';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import Showcase from '../showcase/Showcase/Showcase';
import useModal from '../../hooks/useModal';
import Promo from '../info/Promo/Promo';
import Salesman from '../Salesman/Salesman';
import {
  setIsAuthorized,
  setRegisterStep,
  setAuthErrorMessage,
} from '../../store/dataAuthorisation';
import { setIsEditing } from '../../store/userSlice';
// import Forgot from '../auth/ForgotPassword/ForgotPassword';
import ProfileForm from '../personal/user/ProfileForm';
// import Goods from '../personal/goods/Goods';
import { getAuthorisationData } from '../../store';
import MyOrders from '../personal/user/MyOrders';
import MyReviews from '../personal/user/MyReviews';
import MyRefunds from '../personal/user/MyRefunds';
import SellerLegalData from '../personal/seller/SellerLegalData';
import SellerPersonalData from '../personal/seller/SellerPersonalData';
import MyGoods from '../personal/seller/MyGoods';
import MyPromoCodes from '../personal/seller/MyPromoCodes';
import Statistics from '../personal/seller/Statistics';
import OrderAfter from '../Order/OrderAfter/OrderAfter';

const App = () => {
  const { formRequest } = useQueryParameter();

  const [isPreloader, setPreloader] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const { isAuthorized, isLoginModal } = useSelector(getAuthorisationData);

  const dispatch = useDispatch();

  const [showAuthButtons, setShowAuthButtons] = useState(false);
  useModal(showAuthButtons, setShowAuthButtons);

  const [showAuthModal, setShowAuthModal] = useState(false);
  useModal(showAuthModal, setShowAuthModal);

  // очистить очистить хранилище
  const clearStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
  };
  // очистить стейты авторизации
  const clearStates = () => {
    clearStorage();
    // заменить на  dispatch(logOut());
    dispatch(setIsAuthorized(false));
    setCurrentUser({});
    dispatch(setRegisterStep(1));
    // сбросить стейты избранного
    dispatch(cleanLike());
    dispatch(clearCarts());
  };
  // Загрузить начальные данные
  const getInitialData = useCallback(() => {
    dispatch(getMinMaxCost());
    dispatch(getProducts(formRequest));
  }, [dispatch, formRequest]);
  // Загрузить данные
  const getFullData = useCallback(() => {
    getInitialData();
    dispatch(getFavorites());
    dispatch(getCart());
  }, [dispatch, getInitialData]);

  const cbGetInitialsData = useCallback(() => {
    if (checkToken()) {
      getFullData();
    } else {
      getInitialData();
    }
  }, [getFullData, getInitialData]);

  // Чекнуть токен, произвести загрузку данных пользователя, избранных (корзина не добавлена)
  const cbTokenCheck = useCallback(async () => {
    setPreloader(true);
    try {
      if (!checkToken()) {
        clearStates();
      } else {
        const userData = await api.getUserMe();
        if (userData) {
          setCurrentUser(userData);
          dispatch(setIsAuthorized(true));
        }
      }
    } catch (err) {
      console.log('cbTokenCheck => getUserMe =>', err); // Консоль
      clearStates();
    } finally {
      cbGetInitialsData();
      setPreloader(false);
    }
  }, [clearStorage, cbGetInitialsData]);

  // Выполнить первичную проверку по токену и загрузить данные
  useEffect(() => {
    cbTokenCheck();
  }, []);

  // Выполнить поиск
  useEffect(() => {
    dispatch(getProducts(formRequest));
  }, [formRequest, dispatch]);

  // Авторизация
  const cbAuth = async (data) => {
    setPreloader(true);
    try {
      const res = await api.postLogIn(data);
      setToken(res.auth_token, data.rememberMe);
      // загрузить данные пользователя и чекнуть jwt
      cbTokenCheck();
      // если мы в модалке логина, то закрываем ее при успешной авторизации
      if (isLoginModal) {
        setShowAuthButtons(false);
        setShowAuthModal(false);
      }
    } catch (err) {
      console.log('cbAuth => err', err); // Консоль
      const errMessage = Object.values(err)[0];
      dispatch(setAuthErrorMessage(errMessage));
    } finally {
      setPreloader(false);
    }
  };

  // Логин
  const cbLogIn = (data) => {
    cbAuth(data);
    // setShowAuthButtons(false);
    // setShowAuthModal(false);
  };

  // Регистрация
  const cbRegister = async (data) => {
    setPreloader(true);
    try {
      await api.postUser(data);
      cbAuth(data);
      localStorage.removeItem('registerFormData');
      dispatch(setRegisterStep(3));
    } catch (err) {
      console.log('cbRegister => err', err); // Консоль
      const errMessage = Object.values(err)[0];
      dispatch(setAuthErrorMessage(errMessage));
    } finally {
      setPreloader(false);
    }
  };

  // Логаут
  const cbLogout = async () => {
    setPreloader(true);
    try {
      await api.postLogOut();
      navigate('/');
    } catch (err) {
      console.log('cbRegister => err', err); // Консоль
    } finally {
      // очистить хранилище
      clearStates();
      // загрузить данные пользователя и чекнуть jwt
      cbTokenCheck();
      getInitialData();
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
      const errMessage = Object.values(err)[0];
      dispatch(setAuthErrorMessage(errMessage));
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
      dispatch(setIsEditing(false));
    } catch (err) {
      console.log('cbUpdateProfile => err', err); // Консоль
      const errMessage = Object.values(err)[0];
      dispatch(setAuthErrorMessage(errMessage));
    } finally {
      setPreloader(false);
    }
  };

  // Изменение почты при оформлении заказа
  const cbUpdateEmail = async (data) => {
    setPreloader(true);
    try {
      await api.patchUserMe(data);
      cbTokenCheck();
    } catch (err) {
      console.log('cbUpdateEmail => err', err); // Консоль
      const errMessage = Object.values(err)[0];
      dispatch(setAuthErrorMessage(errMessage));
    }
  };

  // Удаление пользователя
  const cbDeleteUser = async () => {
    setPreloader(true);
    try {
      await api.deleteUserMe();
      cbTokenCheck();
      navigate('/');
    } catch (err) {
      console.log('cbDeleteUser => err', err); // Консоль
      const errMessage = Object.values(err)[0];
      dispatch(setAuthErrorMessage(errMessage));
    } finally {
      setPreloader(false);
    }
  };

  //     email: 'user-test@user-test.com',
  //     password: 'Qwe123Asd456',

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isPreloader && <Preloader />}
      {showAuthButtons && (
        <AuthButtons
          cbLogIn={cbLogIn}
          cbRegister={cbRegister}
          showAuthButtons={showAuthButtons}
          setShowAuthButtons={setShowAuthButtons}
          showAuthModal={showAuthModal}
          setShowAuthModal={setShowAuthModal}
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
                <Showcase />
              </>
            }
          />
          <Route path='/products/:id' element={<Product />} />
          <Route path='*' element={<ErrorPage pageNotFound />} />
          <Route path='/favorites' element={<Favorites />} />
          {/* <Route path='/cart' element={<Cart />} />
          {isAuthorized && <Route path='/order' element={<Order />} />}
          <Route path='/orders/:id' element={<OrderAfter />} /> */}
          <Route path='/cart' element={<Outlet />}>
            <Route index element={<Cart />} />
            <Route path='/cart/order' element={<Order />} />
            <Route path='/cart/orders/:id' element={<OrderAfter />} />
          </Route>
          {isAuthorized && <Route path='/order' element={<Order />} />}
          <Route path='/orders/:id' element={<OrderAfter />} />
          <Route
            path='/personal'
            element={
              <Profile
                cbLogout={cbLogout}
                cbUpdateProfile={cbUpdateProfile}
                cbDeleteUser={cbDeleteUser}
              >
                <Outlet />
              </Profile>
            }
          >
            {/* 3 Уровень вложенности */}
            <Route
              // path='/personal/profile'
              index
              element={<ProfileForm cbUpdateProfile={cbUpdateProfile} />}
            ></Route>
            <Route path='/personal/orders' element={<MyOrders />}></Route>
            <Route path='/personal/refunds' element={<MyRefunds />}></Route>
            <Route path='/personal/reviews' element={<MyReviews />}></Route>
            <Route path='/personal/seller' element={<Outlet />}>
              {/* 4 Уровень вложенности */}
              <Route
                index
                // path='/personal/seller/legal-data'
                element={<SellerLegalData />}
              ></Route>
              <Route
                path='/personal/seller/personal-data'
                element={<SellerPersonalData />}
              ></Route>
              <Route
                path='/personal/seller/goods'
                element={<MyGoods />}
              ></Route>
              <Route
                path='/personal/seller/promo-codes'
                element={<MyPromoCodes />}
              ></Route>
              <Route
                path='/personal/seller/statistics'
                element={<Statistics />}
              ></Route>
            </Route>
          </Route>

          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route
            path='/salesman'
            element={<Salesman cbRegister={cbRegister} />}
          />
          <Route path='/promo' element={<Promo />} />
        </Route>
      </Routes>
    </CurrentUserContext.Provider>
  );
};

export default App;
