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
import Cart from '../Cart/Cart';
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
    return {};
  }, []);

  // проверяем localStorage на наличие карточек и сохраняем в соответсвующий стейт
  const [currentProdacts, setProdacts] = useState(() => {
    checkLocalStorage('currentProdacts');
  });
  const [currentFavorites, setFavorites] = useState(() =>
    checkLocalStorage('currentFavorites')
  );

  const getFavoritesProducts = useCallback(
    async (params) => {
      setPreloader(true);
      try {
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
          throw new Error('Ошибка, нет токена');
        }
        const data = await api.getProducts(`?is_favorited=True${params || ''}`);
        console.log('getFavoritesProducts => data', data);
        localStorage.setItem(
          'currentFavorites',
          // JSON.stringify(data.results)
          JSON.stringify(data)
        );
        setFavorites(() => checkLocalStorage('currentFavorites'));
      } catch (err) {
        console.log('getProdacts => err', err); // Консоль
      } finally {
        setPreloader(false);
      }
    },
    [checkLocalStorage]
  );

  // Чекнуть токен, произвести загрузку данных пользователя, избранных (корзина не добавлена)
  const cbTokenCheck = useCallback(async () => {
    setPreloader(true);
    try {
      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        throw new Error('Ошибка, нет токена');
      }
      const userAccaunt = await api.getUserMe();
      // console.log('cbTokenCheck => jwt => api.getUserMe(jwt) => ', userAccaunt);
      if (userAccaunt) {
        setCurrentUser(userAccaunt);
        setAuthorized(true);
        // Загрузить избранные
        getFavoritesProducts();
      }
    } catch (err) {
      console.log('cbTokenCheck => getUserMe =>', err); // Консоль
      setAuthorized(false);
    } finally {
      setPreloader(false);
    }
  }, [getFavoritesProducts]);

  // Выполнить первичную проверку по токену и загрузить данные
  useEffect(() => {
    cbTokenCheck();
  }, []);

  const getProducts = useCallback(
    async (params) => {
      setPreloader(true);
      try {
        const data = await api.getProducts(params);
        console.log('getProducts => data', data);
        // localStorage.setItem('currentProdacts', JSON.stringify(data.results));
        localStorage.setItem('currentProdacts', JSON.stringify(data));
        setProdacts(() => checkLocalStorage('currentProdacts'));
      } catch (err) {
        console.log('getProdacts => err', err); // Консоль
      } finally {
        setPreloader(false);
      }
    },
    [checkLocalStorage]
  );

  // Выполнить первичную загрузку карточек
  useEffect(() => {
    getProducts();
  }, []);

  // обработчик лайков и дизлайков
  const cbLike = async (card) => {
    setPreloader(true);
    let isLiked;
    const isMy = card.is_favorited;
    console.log('cbLike => isMy =>', isMy);
    try {
      if (!isMy) {
        // Добавляем карточку
        const myFavoritesProduct = await api.postProductFavorite(card.id);
        console.log('cbLike => Добавить в избранное', myFavoritesProduct); // Консоль
        isLiked = true;
      } else {
        // Удаляем карточку
        const resultDelete = await api.deleteProductFavorite(card.id);
        console.log('cbLike => Удалить из избранного', resultDelete); // Консоль
        isLiked = false;
      }
      // Обновить стейт isProduckts
      setProdacts((state) => {
        return {
          ...state,
          results: state.results.map((c) => {
            return c.id === card.id ? { ...c, is_favorited: isLiked } : c;
          }),
        };
      });
      // обновить стейт избранные выполнив загрузку
      getFavoritesProducts();
      // вернуть значение в карточку для ихсенения состояния иконки
      return isLiked;
    } catch (err) {
      console.log('cbCardLike => err', err); // Консоль
    } finally {
      setPreloader(false);
    }
  };

  // Авторизация
  const cbLogIn = async (data, rememberMe) => {
    setPreloader(true);
    try {
      const res = await api.postLogIn(data);
      // console.log(res);
      rememberMe && res.auth_token && localStorage.setItem('jwt', res.auth_token);
      // загрузить данные пользователя и чекнуть jwt
      cbTokenCheck();
    } catch (err) {
      console.log('cbLogIn => err', err); // Консоль
    } finally {
      setPreloader(false);
    }
  };

  // Временно автоматический вход
  // useEffect(() => {
  //   cbLogIn({
  //     email: 'user-test@user-test.com',
  //     password: 'Qwe123Asd456',
  //   });
  // }, []);

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
                    isAuthorized={isAuthorized}
                  />
                  <Outlet />
                  <Footer />
                  {showAuthButtons && (
                    <AuthButtons
                      setShowAuthButtons={setShowAuthButtons}
                      cbLogIn={cbLogIn}
                      setAuthorized={setAuthorized}
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
                    <Content productsPage={currentProdacts} onLike={cbLike} />
                  </main>
                }
              />
              <Route path='/products/:id' element={<Product />} />
              <Route path='*' element={<ErrorPage pageNotFound />} />
              <Route
                path='/favorites'
                element={<Favorites cards={currentFavorites} />}
              />
              <Route path='/cart' element={<Cart />} />
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
