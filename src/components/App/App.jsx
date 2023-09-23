import React from 'react';
import Header from '../Header/Header';
import Poster from '../Poster/Poster';
import Title from '../Title/Title';
import Content from '../Content/Content';
import './App.css';

const App = () => {
  return (
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
  );
};

export default App;
