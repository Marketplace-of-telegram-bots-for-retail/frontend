import React from 'react';
import { useSelector } from 'react-redux';
import './Filters.css';
import Categories from '../Categories/Categories';
import PriceSlider from '../PriceSlider/PriceSlider';

const Filters = () => {
  const formState = useSelector((state) => state.priceFormSubmit);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
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
