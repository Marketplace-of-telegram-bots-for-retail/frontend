import React from 'react';
import { useSelector } from 'react-redux';
import Categories from '../Categories/Categories';
import Cards from '../Cards/Cards';
import Prices from '../Prices/Prices';
import './Content.css';

const Content = () => {
  const formState = useSelector((state) => state.priceFormSubmit);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <section className='content'>
      <form type='submit' className='content__form' onSubmit={handleSubmit}>
        <Categories />
        <Prices />
        <button type='submit' className='content__submit-button'>
          Применить
        </button>
      </form>
      <Cards />
    </section>
  );
};

export default Content;