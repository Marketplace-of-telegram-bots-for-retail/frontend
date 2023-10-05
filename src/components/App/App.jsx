import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Poster from '../Poster/Poster';
import Title from '../Title/Title';
import Content from '../Content/Content';
import AuthButtons from '../AuthButtons/AuthButtons';
import './App.css';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import AftPoster from '../AftPoster/AftPoster';
import Basket from '../Basket/Basket';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Favorites } from '../Favorites/Favorites';

const App = () => {
  const [showAuthButtons, setShowAuthButtons] = useState(false);

  return (
    <div className='container'>
      <div className='inner-container'>
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
                  <AuthButtons setShowAuthButtons={setShowAuthButtons} />
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
                  <AftPoster />
                </main>
              }
            />
            <Route path='/:_id' element={<Product />} />
            <Route path='*' element={<ErrorPage pageNotFound />} />
            <Route path='/profile' element={<ErrorPage />} />
            <Route path='/contacts' element={<ErrorPage />} />
            <Route path='/about' element={<ErrorPage />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/developers' element={<ErrorPage />} />
            <Route path='/privacy-policy' element={<ErrorPage />} />
            <Route path='/salesman' element={<ErrorPage />} />
            <Route path='/return' element={<ErrorPage />} />
            <Route path='/faq' element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
