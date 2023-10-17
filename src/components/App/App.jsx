import React, { useCallback, useEffect, useState } from 'react';
import {
  Outlet,
  Route,
  Routes,
  // useLocation,
  // useNavigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collecProductsAllStates } from '../../store/dataProductsStateSlice';
import { collecFavoritesAllStates } from '../../store/dataFavoritesStateSlice';
import './App.css';
import { api } from '../../utils/Api';
import Header from '../Header/Header';
import { Poster } from '../posters';
import AuthButtons from '../auth/AuthButtons/AuthButtons';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import ErrorPage from '../ErrorPage/ErrorPage';
import Favorites from '../Favorites/Favorites';
import Preloader from '../Preloader/Preloader';
import Main from '../Main/Main';
// import { UserProvider } from '../../context/userContext';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { useFormRequest } from '../../hooks/useFormRequest';
import Showcase from '../showcase/Showcase/Showcase';
import useModal from '../../hooks/useModal';

const App = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const { formRequest } = useFormRequest();

  const [isPreloader, setPreloader] = useState(false);

  const [isAuthorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const dispatch = useDispatch();

  const [showAuthButtons, setShowAuthButtons] = useState(false);
  useModal(showAuthButtons, setShowAuthButtons);

  const [showAuthModal, setShowAuthModal] = useState(false);
  useModal(showAuthModal, setShowAuthModal);

  // Проверить localStorage
  const checkLocalStorage = useCallback((key) => {
    const item = JSON.parse(localStorage.getItem(key));
    if (item) {
      return item;
    }
    return [];
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
        // console.log('getFavoritesProducts => data', data);
        const { results } = data;
        localStorage.setItem(
          'currentFavorites',
          // JSON.stringify(data)
          JSON.stringify(results)
        );
        setFavorites(() => checkLocalStorage('currentFavorites'));
        dispatch(collecFavoritesAllStates(data));
      } catch (err) {
        console.log('getProdacts => err', err); // Консоль
      } finally {
        setPreloader(false);
      }
    },
    [checkLocalStorage, dispatch]
  );

  const getProducts = useCallback(
    async (params) => {
      // setPreloader(true);
      try {
        const data = await api.getProducts(params);
        const { results } = data;
        localStorage.setItem('currentProdacts', JSON.stringify(results));
        setProdacts(() => checkLocalStorage('currentProdacts'));
        dispatch(collecProductsAllStates(data));
      } catch (err) {
        console.log('getProdacts => err', err); // Консоль
      } finally {
        // setPreloader(false);
      }
    },
    [checkLocalStorage, dispatch]
  );

  // Выполнить первичную загрузку карточек
  useEffect(() => {
    getProducts();
  }, []);

  // Чекнуть токен, произвести загрузку данных пользователя, избранных (корзина не добавлена)
  const cbTokenCheck = useCallback(async () => {
    setPreloader(true);
    try {
      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        throw new Error('Ошибка, нет токена');
      }
      const userData = await api.getUserMe();
      console.log('cbTokenCheck => jwt => api.getUserMe(jwt) => ', userData);
      if (userData) {
        setCurrentUser(userData);
        setAuthorized(true);
        // Загрузить избранные
        await getFavoritesProducts();
        // Обновить стейт
        await getProducts();
      }
    } catch (err) {
      console.log('cbTokenCheck => getUserMe =>', err); // Консоль
      setAuthorized(false);
    } finally {
      setPreloader(false);
    }
  }, [getFavoritesProducts, getProducts]);

  // Выполнить первичную проверку по токену и загрузить данные
  useEffect(() => {
    cbTokenCheck();
  }, []);

  // Выполнить поиск по Ботам
  const getSearchProducts = useCallback(() => {
    getProducts(formRequest);
  }, [getProducts, formRequest]);

  const getMoreProducts = useCallback(
    async (params) => {
      const productsData = JSON.parse(localStorage.getItem('currentProdacts'));
      setPreloader(true);
      try {
        const data = await api.getProducts(params);
        const { count, next, previous, results } = data;
        const newArr = productsData.concat(results);
        localStorage.setItem('currentProdacts', JSON.stringify(newArr));
        setProdacts(() => checkLocalStorage('currentProdacts'));
        dispatch(
          collecProductsAllStates({ count, next, previous, results: newArr })
        );
      } catch (err) {
        console.log('getProdacts => err', err); // Консоль
      } finally {
        setPreloader(false);
      }
    },
    [checkLocalStorage, dispatch]
  );

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
        console.log(state);
        return state.map((c) => {
          return c.id === card.id ? { ...c, is_favorited: isLiked } : c;
        });
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
  const cbLogIn = async (data) => {
    setPreloader(true);
    try {
      const res = await api.postLogIn(data);
      // console.log(res);
      res.auth_token && localStorage.setItem('jwt', res.auth_token);
      // загрузить данные пользователя и чекнуть jwt
      await cbTokenCheck();
      // Загрузить избранные
      // await getFavoritesProducts();
      // // Обновить стейт
      // await getProducts();
      // setProdacts(() => checkLocalStorage('currentProdacts'));
    } catch (err) {
      console.log('cbLogIn => err', err); // Консоль
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
    } catch (err) {
      console.log('cbRegister => err', err); // Консоль
    } finally {
      setPreloader(false);
      localStorage.removeItem('registerFormData');
    }
  };

  // Логаут
  const cbLogout = async () => {
    setPreloader(true);
    try {
      await api.postLogOut();
      localStorage.clear();
      setAuthorized(false);
      setCurrentUser({});
      // загрузить данные пользователя и чекнуть jwt
      await cbTokenCheck();
      // Обновить стейт
      await getProducts();
      setShowAuthButtons(false);
    } catch (err) {
      console.log('cbRegister => err', err); // Консоль
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
        />
      )}
      <Routes>
        {/* 1 Уровень вложенности */}
        <Route
          path='/'
          element={
            <>
              <Header
                showAuthButtons={showAuthButtons}
                setShowAuthButtons={setShowAuthButtons}
                isAuthorized={isAuthorized}
                onSearch={getSearchProducts}
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
                  productsPage={currentProdacts}
                  onLike={cbLike}
                  onSearch={getSearchProducts}
                  onMore={getMoreProducts}
                />
              </>
            }
          />
          <Route path='/products/:id' element={<Product onLike={cbLike} />} />
          <Route path='*' element={<ErrorPage pageNotFound />} />
          <Route
            path='/favorites'
            element={
              <Favorites favoritesPage={currentFavorites} onLike={cbLike} />
            }
          />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile cbLogout={cbLogout} />} />

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
    </CurrentUserContext.Provider>
  );
};

export default App;
