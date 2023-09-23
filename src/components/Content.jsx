import React from 'react';
import Categories from './Categories';
import Cards from './Cards';
import Prices from './Prices';

const Content = () => {
  return (
    <section className='content'>
      <div>
        <Categories />
        <Prices />
      </div>
      <Cards />
    </section>
  );
};

export default Content;
