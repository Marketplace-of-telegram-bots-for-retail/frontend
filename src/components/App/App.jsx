import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
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

const App = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [isPreloader, setPreloader] = useState(false);
  const [showAuthButtons, setShowAuthButtons] = useState(false);

  // const [isAuthorized, setAuthorized] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);

  // // Проверить localStorage
  // const checkLocalStorage = useCallback((key) => {
  //   const item = JSON.parse(localStorage.getItem(key));
  //   if (item) {
  //     return item;
  //   }
  //   return [];
  // }, []);

  // // проверяем localStorage на наличие карточек и сохраняем в соответсвующий стейт
  // const [searchProdacts, setSearchProdacts] = useState(() =>
  //   checkLocalStorage('searchProdacts')
  // );

  // const [myFavoriteProdacts, setMyFavoriteProdacts] = useState(() =>
  //   checkLocalStorage('myFavoriteProdacts')
  // );

  const getProducts = useCallback(async () => {
    setPreloader(true);
    try {
      const prodacts = await api.getProducts();
      console.log(prodacts);
    } catch (err) {
      console.log('getProdacts => err', err); // Консоль
    } finally {
      setPreloader(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const cbLogIn = async (data) => {
    setPreloader(true);
    try {
      const token = await api.postLogIn(data);
      console.log(token);
    } catch (err) {
      console.log('cbLogIn => err', err); // Консоль
    } finally {
      setPreloader(false);
    }
  };

  return (
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
                />
                <Outlet />
                <Footer />
                {showAuthButtons && (
                  <AuthButtons
                    setShowAuthButtons={setShowAuthButtons}
                    cbLogIn={cbLogIn}
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
                  <Content />
                </main>
              }
            />
            <Route path='/:_id' element={<Product />} />
            <Route path='*' element={<ErrorPage pageNotFound />} />
            <Route path='/favorites' element={<Favorites />} />
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
  );
};

export default App;
