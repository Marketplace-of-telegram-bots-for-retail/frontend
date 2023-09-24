import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import Poster from '../Poster/Poster';
import Title from '../Title/Title';
import Content from '../Content/Content';
import AuthButtons from '../AuthButtons/AuthButtons';
import './App.css';

const App = () => {
  const [showAuthButtons, setShowAuthButtons] = useState(false);

  return (
    <Router>
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
          { showAuthButtons && <AuthButtons />}
        </div>
      </div>
    </Router>
  );
};

export default App;
