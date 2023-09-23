import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import Poster from '../Poster/Poster';
import Title from '../Title/Title';
import Content from '../Content/Content';
import './App.css';
import AuthButtons from '../AuthButtons/AuthButtons';

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
