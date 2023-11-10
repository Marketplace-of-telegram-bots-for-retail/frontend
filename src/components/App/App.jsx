/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  getFavorites,
  cleanLike,
  getMinMaxCost,
  clearCarts,
  getCart,
  changePassword,
  deleteUser,
  getUserMe,
  logIn,
  logOut,
  registerUser,
  updateProfile,
} from '../../store/actions';
import { getUserData } from '../../store';

import './App.css';
import { checkToken } from '../../utils/tokenStorage';
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
import Showcase from '../showcase/Showcase/Showcase';
import useModal from '../../hooks/useModal';
import Promo from '../info/Promo/Promo';
import Salesman from '../Salesman/Salesman';
import ProfileForm from '../personal/user/ProfileForm';
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
  const navigate = useNavigate();
  const [isPreloader, setPreloader] = useState(false);
  const { isAuthorized, isLoginModal } = useSelector(getUserData);

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
    // // заменить на  dispatch(logOut());
    // dispatch(setIsAuthorized(false));
    // setCurrentUser({});
    // dispatch(setRegisterStep(1));
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
  const cbTokenCheck = useCallback(() => {
    if (!checkToken()) {
      clearStates();
    } else {
      dispatch(getUserMe());
    }
    cbGetInitialsData();
    setPreloader(false);
  }, [clearStates, cbGetInitialsData]);

  // Выполнить первичную проверку по токену и загрузить данные
  useEffect(() => {
    cbTokenCheck();
  }, []);

  // Выполнить поиск
  useEffect(() => {
    dispatch(getProducts(formRequest));
  }, [formRequest, dispatch]);

  // Логин;
  const cbLogIn = (data) => {
    // cbAuth(data);
    dispatch(logIn(data));
  };
  // закрыть модалки авторизации
  useEffect(() => {
    if (isAuthorized && isLoginModal) {
      setShowAuthButtons(false);
      setShowAuthModal(false);
      cbTokenCheck();
    }
  }, [isAuthorized, isLoginModal]);

  // Регистрация
  const cbRegister = async (data) => {
    dispatch(registerUser(data));
  };

  // Логаут
  const cbLogout = async () => {
    dispatch(logOut()).then(() => {
      navigate('/');
      clearStates();
      // загрузить данные пользователя и чекнуть jwt
      cbTokenCheck();
      getInitialData();
      setPreloader(false);
    });
  };

  // Изменить пароль
  const cbChangePassword = async (data) => {
    dispatch(changePassword(data));
  };

  // Обновление данных профиля
  const cbUpdateProfile = async (data) => {
    dispatch(updateProfile(data));
  };

  // // Изменение почты при оформлении заказа
  // const cbUpdateEmail = async (data) => {
  //   setPreloader(true);
  //   try {
  //     await api.patchUserMe(data);
  //     cbTokenCheck();
  //   } catch (err) {
  //     console.log('cbUpdateEmail => err', err); // Консоль
  //     const errMessage = Object.values(err)[0];
  //     dispatch(setAuthErrorMessage(errMessage));
  //   }
  // };

  // Удаление пользователя
  const cbDeleteUser = async () => {
    dispatch(deleteUser()).then(() => {
      navigate('/');
      clearStates();
      // загрузить данные пользователя и чекнуть jwt
      cbTokenCheck();
      getInitialData();
      setPreloader(false);
    });
  };

  //     email: 'user-test@user-test.com',
  //     password: 'Qwe123Asd456',

  return (
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
            <Route path='/personal/seller/goods' element={<MyGoods />}></Route>
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
        <Route path='/salesman' element={<Salesman />} />
        <Route path='/promo' element={<Promo />} />
      </Route>
    </Routes>
  );
};

export default App;
