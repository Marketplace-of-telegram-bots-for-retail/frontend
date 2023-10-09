import React, { useCallback, useEffect, useState } from 'react';
import {
  Outlet,
  Route,
  Routes,
  // useLocation,
  // useNavigate,
} from 'react-router-dom';

import './App.css';
import { api } from '../../utils/Api';
import Header from '../Header/Header';
import Poster from '../Poster/Poster';
import Title from '../Title/Title';
import { Content } from '../Content/Content';
import AuthButtons from '../AuthButtons/AuthButtons';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import Basket from '../Basket/Basket';
import Profile from '../Profile/Profile';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Favorites } from '../Favorites/Favorites';
import { Preloader } from '../Preloader/Preloader';
// Temp
import { UserProvider } from '../../context/userContext';

const App = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [isPreloader, setPreloader] = useState(false);
  const [showAuthButtons, setShowAuthButtons] = useState(false);

  const [isAuthorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Проверить localStorage
  const checkLocalStorage = useCallback((key) => {
    const item = JSON.parse(localStorage.getItem(key));
    if (item) {
      return item;
    }
    return [];
  }, []);

  // проверяем localStorage на наличие карточек и сохраняем в соответсвующий стейт
  const [searchProdacts, setSearchProdacts] = useState(() => {
    checkLocalStorage('searchProdacts');
  });

  const [myFavoritesProducts, setMyFavoritesProducts] = useState(() =>
    checkLocalStorage('myFavoritesProducts')
  );

  const getFavoritesProducts = useCallback(
    async (params) => {
      setPreloader(true);
      try {
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
          throw new Error('Ошибка, нет токена');
        }
        const prodacts = await api.getProducts(
          `?is_favorited=True${params || ''}`,
          jwt
        );
        console.log('getProducts => res', prodacts);
        localStorage.setItem('myFavoritesProducts', JSON.stringify(prodacts));
        setMyFavoritesProducts(() => checkLocalStorage('myFavoritesProducts'));
      } catch (err) {
        console.log('getProdacts => err', err); // Консоль
      } finally {
        setPreloader(false);
      }
    },
    [checkLocalStorage]
  );

  const getProducts = useCallback(
    async (params) => {
      setPreloader(true);
      try {
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
          throw new Error('Ошибка, нет токена');
        }
        const prodacts = await api.getProducts(params, jwt || undefined);
        console.log('getProducts => res', prodacts);
        localStorage.setItem('searchProdacts', JSON.stringify(prodacts));
        setSearchProdacts(() => checkLocalStorage('searchProdacts'));
      } catch (err) {
        console.log('getProdacts => err', err); // Консоль
      } finally {
        setPreloader(false);
      }
    },
    [checkLocalStorage]
  );

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const cbTokenCheck = useCallback(async () => {
    setPreloader(true);
    try {
      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        throw new Error('Ошибка, нет токена');
      }
      const userAccaunt = await api.getUserMe(jwt);
      console.log('cbTokenCheck => jwt => api.getUserMe(jwt) => ', userAccaunt);
      if (userAccaunt) {
        setCurrentUser(userAccaunt);
        setAuthorized(true);
      }
    } catch (err) {
      console.log('cbTokenCheck => getUserMe =>', err); // Консоль
      setAuthorized(false);
    } finally {
      setPreloader(false);
    }
  }, []);
  useEffect(() => {
    cbTokenCheck();
  }, [cbTokenCheck]);

  const cbLogIn = async (data) => {
    setPreloader(true);
    try {
      const res = await api.postLogIn(data);
      res.auth_token && localStorage.setItem('jwt', res.auth_token);
      // загрузить данные пользователя и чекнуть jwt
      cbTokenCheck();
      // console.log(res.auth_token);
    } catch (err) {
      console.log('cbLogIn => err', err); // Консоль
    } finally {
      setPreloader(false);
    }
  };

  // Временно
  useEffect(() => {
    cbLogIn({
      email: 'user-test@user-test.com',
      password: 'Qwe123Asd456',
    });
  }, []);

  return (
    <UserProvider values={currentUser}>
      <div className='container'>
        <div className='inner-container'>
          {isPreloader && <Preloader />}
          <Routes>
            {/* 1 Уровень вложенности */}
            <Route
              path='/'
              element={
                <>
                  <Header
                    showAuthButtons={showAuthButtons}
                    setShowAuthButtons={setShowAuthButtons}
                    onClickMyFavorites={() => getFavoritesProducts()}
                  />
                  <Outlet />
                  <Footer />
                  {showAuthButtons && (
                    <AuthButtons
                      setShowAuthButtons={setShowAuthButtons}
                      cbLogIn={cbLogIn}
                      isAuthorized={isAuthorized}
                    />
                  )}
                </>
              }
            >
              {/* 2 Уровень вложенности */}
              <Route
                index
                element={
                  <main>
                    <Poster />
                    <Title />
                    <Content productPage={searchProdacts} />
                  </main>
                }
              />
              <Route path='/:_id' element={<Product />} />
              <Route path='*' element={<ErrorPage pageNotFound />} />
              <Route
                path='/favorites'
                element={<Favorites cards={myFavoritesProducts} />}
              />
              <Route path='/basket' element={<Basket />} />
              <Route path='/profile' element={<Profile />} />

              <Route
                path='/contacts'
                // стоит заглушка
                element={<ErrorPage />}
              />
              <Route
                path='/about'
                // стоит заглушка
                element={<ErrorPage />}
              />
              <Route
                path='/developers'
                // стоит заглушка
                element={<ErrorPage />}
              />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route
                path='/salesman'
                // стоит заглушка
                element={<ErrorPage />}
              />
              <Route
                path='/return'
                // стоит заглушка
                element={<ErrorPage />}
              />
              <Route
                path='/faq'
                // стоит заглушка
                element={<ErrorPage />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
};

export default App;
