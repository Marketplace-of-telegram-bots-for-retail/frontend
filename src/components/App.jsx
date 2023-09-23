import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Poster from './Poster';
import Title from './Title';
import Content from './Content';
import AuthButtons from './AuthButtons/AuthButtons';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <div className='inner-container'>
          <Header />
          <main>
            <Poster />
            <Title />
            <Content />
          </main>
        </div>
      </div>
      <AuthButtons />
    </Router>
  );
};

export default App;
