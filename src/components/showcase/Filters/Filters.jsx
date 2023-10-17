import React from 'react';
import './Filters.css';
import Categories from '../Categories/Categories';
import PriceSlider from '../PriceSlider/PriceSlider';

const Filters = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };
  return (
    <form
      type='submit'
      className='showcase__filters filters'
      onSubmit={handleSubmit}
    >
      <Categories />
      <PriceSlider />
      <button type='submit' className='filters__submit-button'>
        Применить
      </button>
    </form>
  );
};

export default Filters;
