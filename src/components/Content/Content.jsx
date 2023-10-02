import React from 'react';
import Categories from '../Categories/Categories';
import Prices from '../Prices/Prices';
import './Content.css';
import { Showcase } from '../Showcase/Showcase';

const Content = () => {
  return (
    <section className='content'>
      <div>
        <Categories />
        <Prices />
      </div>
      <Showcase />
    </section>
  );
};

export default Content;
