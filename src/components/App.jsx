import React from 'react';
import Header from './Header';
import Poster from './Poster';
import Title from './Title';
import Content from './Content';

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
