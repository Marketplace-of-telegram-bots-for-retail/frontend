import React from 'react';
import Categories from '../Categories/Categories';
import Cards from '../Cards/Cards';
import Prices from '../Prices/Prices';
import './Content.css';

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
