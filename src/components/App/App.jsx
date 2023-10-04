import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Poster from '../Poster/Poster';
import Title from '../Title/Title';
import Content from '../Content/Content';
import AuthButtons from '../AuthButtons/AuthButtons';
import './App.css';
import Product from '../Product/Product';
import { Favorites } from '../Favorites/Favorites';

const App = () => {
  const [showAuthButtons, setShowAuthButtons] = useState(false);

  return (
    <Routes>
      {/* 1 Уровень вложенности */}
      <Route
        path='/'
        element={(
          // переписать, изменить вложенность по БЭМ
          <div className='container'>
            <div className='inner-container'>
              <Header
                showAuthButtons={showAuthButtons}
                setShowAuthButtons={setShowAuthButtons}
              />
              <Outlet />
              {showAuthButtons && (
                <AuthButtons setShowAuthButtons={setShowAuthButtons} />
              )}
            </div>
          </div>
        )}
      >
        {/* 2 Уровень вложенности */}
        <Route
          index
          element={(
            // переписать в отдельный компонент Main
            <main>
              <Poster />
              <Title />
              <Content />
            </main>
          )}
        />
        <Route
          path='/:_id'
          element={(<Product />)}
        />
        <Route
          path='/cart'
          element={(
            <div>вставить компонент Cart</div>
          )}
        />
        <Route
          path='*'
          element={(
            <div>вставить компонент NotFound</div>
          )}
        />
        <Route
          path='/profile'
          element={(
            <div>вставить компонент Profile</div>
          )}
        />
        <Route
          path='/contacts'
          element={(
            <div>вставить компонент Contact</div>
          )}
        />
        <Route
          path='/about-us'
          element={(
            <div>вставить компонент AboutUs</div>
          )}
        />
        <Route
          path='/favorites'
          element={(
            <Favorites />
          )}
        />
      </Route>
    </Routes>
  );
};

export default App;
