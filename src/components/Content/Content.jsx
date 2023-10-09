import React from 'react';
import { useSelector } from 'react-redux';
import Categories from '../Categories/Categories';
import Prices from '../Prices/Prices';
import './Content.css';
import { Showcase } from '../Showcase/Showcase';

export const Content = ({ cards, onLike }) => {
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
      <Showcase cards={cards} onLike={onLike} />
    </section>
  );
};
