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
import Profile from '../Profile/Profile';

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
            <Route path='/cart' element={<div>вставить компонент Cart</div>} />
            <Route path='*' element={<div>вставить компонент NotFound</div>} />
            <Route path='/profile' element={<Profile />} />
            <Route
              path='/contacts'
              element={<div>вставить компонент Contact</div>}
            />
            <Route
              path='/about-us'
              element={<div>вставить компонент AboutUs</div>}
            />
            <Route
              path='/favorites'
              element={<div>вставить компонент Favorites</div>}
            />
            <Route path='/basket' element={<Basket />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
