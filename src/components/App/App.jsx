import React, { useState } from 'react';
import Header from '../Header/Header';
import Poster from '../Poster/Poster';
import Title from '../Title/Title';
import Content from '../Content/Content';
import AuthButtons from '../AuthButtons/AuthButtons';
import './App.css';
import Product from '../Product/Product';

const App = () => {
  const [showAuthButtons, setShowAuthButtons] = useState(false);

  return (
    <div className='container'>
      <div className='inner-container'>
        <Header
          showAuthButtons={showAuthButtons}
          setShowAuthButtons={setShowAuthButtons}
        />
        <main>
          <Poster />
          <Title />
          <Content />
        </main>
        {showAuthButtons && (
          <AuthButtons setShowAuthButtons={setShowAuthButtons} />
        )}
        <Product />
      </div>
    </div>
  );
};

export default App;
